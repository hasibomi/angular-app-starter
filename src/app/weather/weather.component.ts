import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../services/weather.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @Input() result: string;
  @Input() viewButton: string;
  @Input() dataLoaded: string;

  public constructor(private titleService: Title) { }

  /**
   * Set the browser title.
   *
   * @param string title
   */
  public setTitle(title: string): void {
    this.titleService.setTitle(title);
  }

  ngOnInit() { }

}
