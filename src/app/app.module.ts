import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { PlannerPage } from '../pages/planner/planner';
import { TabsPage } from '../pages/tabs/tabs';
import { WeatherProvider } from '../providers/weather/weather';
import { IonicStorageModule } from '@ionic/storage';
import { AddNotePage } from '../pages/add-note/add-note';
import { NoteProvider } from '../providers/note/note';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewNotePage } from '../pages/view-note/view-note';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SettingsPage,
    PlannerPage,
    TabsPage,
    AddNotePage,
    ViewNotePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    FormsModule, 
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SettingsPage,
    PlannerPage,
    TabsPage,
    AddNotePage,
    ViewNotePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WeatherProvider,
    IonicStorageModule,
    NoteProvider
  ]
})
export class AppModule {}
