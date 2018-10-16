import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  public dataLoaded: Promise<boolean>;

  public result: {
    latt_long: string,
    location_type: string,
    title: string
    woeid: number
  };

  constructor(private currentRoute: ActivatedRoute, private weatherService: WeatherService) {
    this.currentRoute.params.subscribe(param => {
      const { keyword } = param;

      this.weatherService.search(keyword).subscribe(res => {
        this.result = res[0];
        this.dataLoaded = Promise.resolve(true);
      });
    });
  }

  ngOnInit() {

  }

}
