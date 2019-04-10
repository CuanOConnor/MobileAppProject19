import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WeatherProvider {

  apiKey = 'b90245073a8392aec69a261861286c3b';
  //url;

  constructor(public http: HttpClient)
  {
    console.log('Hello WeatherProvider Provider');
    //this.url = 'http://api.openweathermap.org/data/2.5/weather?q=dublin,Ireland&APPID=b90245073a8392aec69a261861286c3b';

  }

  // getting weather info from API with a custom city and country
  getWeather(city, country):Observable<any> 
  {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+city+','+country+'&APPID='+this.apiKey);
  }

}
