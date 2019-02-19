import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {AppareilPage} from "../appareil/appareil";
import {SettingsPage} from "../settings/settings";


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  appreilPage = AppareilPage;
  settingPage = SettingsPage;


}
