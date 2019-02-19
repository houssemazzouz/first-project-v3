import { Component } from '@angular/core';
import {AlertController, IonicPage, MenuController} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public alertCtrl : AlertController, private menuCtrl: MenuController) {
  }

  onToggleLight() {
    let alert = this.alertCtrl.create({
      title:'Est-vous certain(e) de vouloire continuer?',
      subTitle: 'Cette action allumera ou eteindra toutes les lumiere de la maison',
      buttons: [
        {
        text: 'annuler',
        role: 'cancel'
        },
        {
          text: 'confirmer',
          handler: () => console.log('confirmer !')
        }
      ]
    });
    alert.present();

  }
  onToggleMenu() {
    this.menuCtrl.open();
  }

}
