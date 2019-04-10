import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage
{
  weather: any;
  location: 
  {
    city: string,
    country: string
  }
  iconImage: string;

  constructor(public navCtrl: NavController, private weatherProvider:WeatherProvider) 
  {

  }

  ionViewWillEnter()
  {
    
    this.location = {city: 'dublin', country: 'Ireland'}

    this.weatherProvider.getWeather(this.location.city, this.location.country).subscribe(weather => {
    this.weather = weather.weather;
    //console.log(this.weather);

   }); //weather func

    // adding all icon IDs as if conditions to send XXX.png's to home.html using http://openweathermap.org/img/w/XXX.png 
    // Thunderstorms
   /* if(this.weather.weather.icon == "200" || this.weather.weather.icon == "201" || this.weather.weather.icon == "202" || this.weather.weather.icon == "210")
    {
      this.iconImage = "http://openweathermap.org/img/w/11d.png";
    }
    else if(this.weather.weather.icon == "211" || this.weather.weather.icon == "212" || this.weather.weather.icon == "221" || this.weather.weather.icon == "230")
    {
      this.iconImage = "http://openweathermap.org/img/w/11d.png";
    }
    else if(this.weather.weather.icon == "231" || this.weather.weather.icon == "232")
    {
      this.iconImage = "http://openweathermap.org/img/w/11d.png";
    }
    // Drizzle
    else if(this.weather.weather.icon == "300" || this.weather.weather.icon == "301" || this.weather.weather.icon == "302" || this.weather.weather.icon == "310")
    {
      this.iconImage = "http://openweathermap.org/img/w/09d.png";
    }
    else if( this.weather.weather.icon == "311" || this.weather.weather.icon == "312" || this.weather.weather.icon == "313" || this.weather.weather.icon == "314" || this.weather.weather.icon == "321")
    {
      this.iconImage = "http://openweathermap.org/img/w/09d.png";
    }
    // Rain
    else if(this.weather.weather.icon == "500" || this.weather.weather.icon == "501" || this.weather.weather.icon == "502" || this.weather.weather.icon == "503")
    {
      this.iconImage = "http://openweathermap.org/img/w/10d.png";
    }
    else if(this.weather.weather.icon == "504" || this.weather.weather.icon == "511" || this.weather.weather.icon == "520" || this.weather.weather.icon == "521")
    {
      this.iconImage = "http://openweathermap.org/img/w/10d.png";
    }
    else if(this.weather.weather.icon == "522" || this.weather.weather.icon == "531")
    {
      this.iconImage = "http://openweathermap.org/img/w/10d.png";
    }
    // Snow
    else if(this.weather.weather.icon == "600" || this.weather.weather.icon == "601" || this.weather.weather.icon == "602" || this.weather.weather.icon == "611")
    {
      this.iconImage = "http://openweathermap.org/img/w/13d.png";
    }
    else if(this.weather.weather.icon == "612" || this.weather.weather.icon == "613" || this.weather.weather.icon == "615" || this.weather.weather.icon == "616")
    {
      this.iconImage = "http://openweathermap.org/img/w/13d.png";
    }
    else if(this.weather.weather.icon == "620" || this.weather.weather.icon == "621" || this.weather.weather.icon == "622")
    {
      this.iconImage = "http://openweathermap.org/img/w/13d.png";
    }
    // Atmosphere
    else if(this.weather.weather.icon == "701" || this.weather.weather.icon == "711" || this.weather.weather.icon == "721" || this.weather.weather.icon == "731")
    {
      this.iconImage = "http://openweathermap.org/img/w/50d.png";
    }
    else if(this.weather.weather.icon == "741" || this.weather.weather.icon == "751" || this.weather.weather.icon == "761" || this.weather.weather.icon == "762")
    {
      this.iconImage = "http://openweathermap.org/img/w/50d.png";
    }
    else if(this.weather.weather.icon == "771" || this.weather.weather.icon == "781")
    {
      this.iconImage = "http://openweathermap.org/img/w/50d.png";
    }
    // Clear 
    else if(this.weather.weather.icon == "800")
    {
      this.iconImage = "http://openweathermap.org/img/w/01d.png";
    }
    // Clouds
    else if(this.weather.weather.icon == "801")
    {
      this.iconImage = "http://openweathermap.org/img/w/02d.png";
    }
    else if(this.weather.weather.icon == "802")
    {
      this.iconImage = "http://openweathermap.org/img/w/03d.png";
    }
    else if(this.weather.weather.icon == "803" || this.weather.weather.icon == "804")
    {
      this.iconImage = "http://openweathermap.org/img/w/04d.png";
    }*/
  }// ionViewWillEnter

}// HomePage
