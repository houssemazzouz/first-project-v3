import { Component, ViewChild } from '@angular/core';
import { MenuController, NavController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as firebase from 'firebase';

import { TabsPage } from '../pages/tabs/tabs';
import { OptionPage } from '../pages/option/option';
import {AuthPage} from "../pages/auth/auth";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tabsPage: any = TabsPage;
  optionsPage: any = OptionPage;
  authPage: any = AuthPage;
  isAuth: boolean;
  @ViewChild('content') content: NavController;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private menuCtrl: MenuController) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      let config = {
        apiKey: "AIzaSyDHOgsghqV5cIdpyrhXEmmtkaAroVNsfG4",
        authDomain: "openclassrooms-ionic.firebaseapp.com",
        databaseURL: "https://openclassrooms-ionic.firebaseio.com",
        projectId: "openclassrooms-ionic",
        storageBucket: "openclassrooms-ionic.appspot.com",
        messagingSenderId: "121353569465"
      };
      firebase.initializeApp(config);
      firebase.auth().onAuthStateChanged(
        (user) => {
          if (user) {
            this.isAuth = true;
            this.content.setRoot(TabsPage);
          } else {
            this.isAuth = false;
            this.content.setRoot(AuthPage, {mode: 'connect'});
          }
        }
      );
    });



  }
  onDisconnect() {
    firebase.auth().signOut();
    this.menuCtrl.close();
  }
  onNavigate(page: any, data?: {}) {
    this.content.setRoot(page, data ? data : null);
    this.menuCtrl.close();
  }
}
