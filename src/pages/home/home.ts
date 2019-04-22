import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Storage } from '@ionic/storage';

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
  temperature: any;

  constructor(public navCtrl: NavController, private weatherProvider:WeatherProvider, private storage:Storage) 
  {

  }

  ionViewWillEnter()
  {
    this.storage.get('location').then((val)=>{
      if(val != null)
      {
        this.location = JSON.parse(val);
      }
      else
      {
        this.location = {city: 'dublin', country: 'IE'}
      }

      this.weatherProvider.getWeather(this.location.city, this.location.country).subscribe(weather => {
        this.weather = weather.weather;
        this.cityData = weather.name;
        this.iconID = weather.weather[0].icon;
        this.temperature = weather.main.temp;
        //console.log(this.iconID);
    
        // adding all icon IDs as if conditions to send XXX.png's to home.html
        // Thunderstorms
        if(this.iconID == "11d")
        {
          this.iconURL = "assets/imgs/thunder.png";
        }
        // Drizzle
        else if(this.iconID == "09d")
        {
          this.iconURL = "assets/imgs/rain.png";
        }
        // Rain
        else if(this.iconID == "10d")
        {
          this.iconURL = "assets/imgs/rain.png";
        }
        // Snow
        else if(this.iconID == "13d")
        {
          this.iconURL = "assets/imgs/snow.png";
        }
        // Atmosphere
        else if(this.iconID == "50d")
        {
          this.iconURL = "assets/imgs/fog.png";
        }
        // Clear 
        else if(this.iconID == "01d")
        {
          this.iconURL = "assets/imgs/clear.png";
        }
        // Clouds
        else if(this.iconID == "02d")
        {
          this.iconURL = "assets/imgs/clouds.png";
        }
        else if(this.iconID == "03d")
        {
          this.iconURL = "assets/imgs/clouds.png";
        }
        else if(this.iconID == "04d")
        {
          this.iconURL = "assets/imgs/clouds.png";
        }

      }); //weather func

    });//storage.get() + function

  }// ionViewWillEnter

}// HomePage
