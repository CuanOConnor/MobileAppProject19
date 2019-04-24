import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage 
{
  city: string;
  country: string;
  
  // NOTE: This API uses city and a country code.
  // When testing for another location in the search function, use:
  // city: london
  // country: GB 
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:Storage)
  {
    // Once again checking for my weather data and parsing and setting values with a default
    this.storage.get('location').then((val)=>{
      if(val != null)
      {
        let location = JSON.parse(val);
        this.city = location.city;
        this.country = location.country;
      }
      else
      {
        this.city = "dublin";
        this.country = "IE";
      }
    });// location func
  }

  ionViewDidLoad()
  {
    console.log('ionViewDidLoad SettingsPage');
  }

  // Saving user input location data to local storage
  saveData()
  {
    let location = 
    {
      city: this.city,
      country: this.country
    }//location
    //console.log(location);
    this.storage.set('location', JSON.stringify(location));
    this.navCtrl.push(HomePage);
  }
}
