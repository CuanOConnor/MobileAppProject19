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
  cityData: any;
  location: 
  {
    city: string,
    country: string
  }

  iconID: any;
  iconURL: string;

  constructor(public navCtrl: NavController, private weatherProvider:WeatherProvider) 
  {

  }

  ionViewWillEnter()
  {
    
    this.location = {city: 'dublin', country: 'Ireland'}

    this.weatherProvider.getWeather(this.location.city, this.location.country).subscribe(weather => {
    this.weather = weather.weather;
    this.cityData = weather.name;
    this.iconID = weather.icon;
    //console.log(this.iconID);

   }); //weather func
  
   // adding all icon IDs as if conditions to send XXX.png's to home.html using http://openweathermap.org/img/w/XXX.png 
    // Thunderstorms
    if(this.iconID == "11d")
    {
      this.iconURL = "http://openweathermap.org/img/w/11d.png";
    }
    // Drizzle
    else if(this.iconID == "09d")
    {
      this.iconURL = "http://openweathermap.org/img/w/09d.png";
    }
    // Rain
    else if(this.iconID == "10d")
    {
      this.iconURL = "http://openweathermap.org/img/w/10d.png";
    }
    // Snow
    else if(this.iconID == "13d")
    {
      this.iconURL = "http://openweathermap.org/img/w/13d.png";
    }
    // Atmosphere
    else if(this.iconID == "50d")
    {
      this.iconURL = "http://openweathermap.org/img/w/50d.png";
    }
    // Clear 
    else if(this.iconID == "01d")
    {
      this.iconURL = "http://openweathermap.org/img/w/01d.png";
    }
    // Clouds
    else if(this.iconID == "02d")
    {
      this.iconURL = "http://openweathermap.org/img/w/02d.png";
    }
    else if(this.iconID == "03d")
    {
      this.iconURL = "http://openweathermap.org/img/w/03d.png";
    }
    else if(this.iconID == "04d")
    {
      this.iconURL = "http://openweathermap.org/img/w/04d.png";
    }

  }// ionViewWillEnter

    

}// HomePage
