import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AppareilPage } from '../pages/appareil/appareil';
import { SingleAppareilPage } from '../pages/appareil/single-appareil/single-appareil';
import {SettingsPage} from "../pages/settings/settings";
import {TabsPage} from "../pages/tabs/tabs";
import {AppareilService} from "../services/appareil.service";
import {OptionPage} from "../pages/option/option";
import {AppareilFormPage} from "../pages/appareil-form/appareil-form";
import {AuthService} from "../services/auth.service";
import {AuthPage} from "../pages/auth/auth";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AppareilPage,
    SingleAppareilPage,
    SettingsPage,
    TabsPage,
    OptionPage,
    AppareilFormPage,
    AuthPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AppareilPage,
    SingleAppareilPage,
    SettingsPage,
    TabsPage,
    OptionPage,AppareilFormPage,
    AuthPage
  ],
  providers: [
    AppareilService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}
