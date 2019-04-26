import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {

  private appid = 'b3f9e39916d7e42ba00bcbfbadcf9604';

  constructor(private http: HttpClient) { }

  getWeather(lat, long){
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&appid=' + this.appid)
  }
}
