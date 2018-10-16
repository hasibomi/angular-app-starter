import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-view',
  templateUrl: './weather-view.component.html',
  styleUrls: ['./weather-view.component.css']
})
export class WeatherViewComponent implements OnInit {

  public dataLoaded: Promise<boolean>;
  public weather: object = {};

  constructor(private currentRoute: ActivatedRoute, private weatherService: WeatherService) { }

  ngOnInit() {
    this.currentRoute.params.subscribe(param => {
      const { woeid } = param;

      this.weatherService.location(woeid).subscribe(res => {
        this.weather = res;
        this.dataLoaded = Promise.resolve(true);
      });
    });
  }

}
