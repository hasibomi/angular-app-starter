import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiurl = 'http://localhost:8000/weather.php';

  constructor(private http: HttpClient) { }

  /**
   * Search weather.
   *
   * @param string keyword
   */
  public search(keyword: string): Observable<any> {
    return this.http.get(`${this.apiurl}?command=search&keyword=${keyword}`);
  }

  /**
   * View a location.
   *
   * @param number woeid
   */
  public location(woeid: number): Observable<any> {
    return this.http.get(`${this.apiurl}?command=location&woeid=${woeid}`);
  }
}
