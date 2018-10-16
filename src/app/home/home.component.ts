import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public dataLoaded: Promise<boolean>;

  public results: {
    latt_long: string,
    location_type: string,
    title: string
    woeid: number
  }[] = [];

  constructor(private weatherService: WeatherService) {
    let counter: number = 1;
    const locations = ['istanbul', 'berlin', 'london', 'helsinki', 'dublin', 'vancouver'];

    locations.forEach(location => {
      this.weatherService.search(location).subscribe(res => {
        this.results.push(res[0]);
        counter++;

        if (locations.length === counter) {
          this.dataLoaded = Promise.resolve(true);
        }
      }, res => alert(res.message));
    });
  }

  // ,berlin,london,helsinki,dublin,vancouver

  ngOnInit() { }

}
