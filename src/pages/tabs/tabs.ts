import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PlannerPage } from '../planner/planner';
import { SettingsPage } from '../settings/settings';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  homePage = HomePage;
  plannerPage = PlannerPage;
  settingsPage = SettingsPage;

}
