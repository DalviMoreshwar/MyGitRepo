import { Component } from '@angular/core';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { RestServiceService } from '../services/rest-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  lat: number;
  long: number;
  weatherData: any;

  constructor(private geolocation: Geolocation, private restProvider: RestServiceService) {
   this.currentWeather();
  }

  currentWeather(){
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      console.log(resp.coords.latitude);
      this.lat = resp.coords.latitude;
      // resp.coords.longitude
      console.log(resp.coords.longitude);
      this.long = resp.coords.longitude;
      this.restProvider.getWeather(this.lat, this.long).subscribe(result => {
        this.weatherData = result;
        console.log(this.weatherData);
      });
     }).catch((error) => {
       console.log('Error getting location', error.message);
     });
  }
}
