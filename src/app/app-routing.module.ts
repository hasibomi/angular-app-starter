import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { WeatherViewComponent } from './weather-view/weather-view.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:keyword', component: SearchResultComponent },
  { path: 'weather/:woeid', component: WeatherViewComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
