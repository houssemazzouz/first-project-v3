import {Component, OnDestroy, OnInit} from '@angular/core';
import {
  IonicPage,
  LoadingController,
  MenuController,
  ModalController,
  NavController,
  NavParams,
  ToastController
} from 'ionic-angular';
import { SingleAppareilPage } from './single-appareil/single-appareil';
import {Appareil} from "../../models/Appareil";
import {AppareilService} from "../../services/appareil.service";
import {AppareilFormPage} from "../appareil-form/appareil-form";
import {Subscription} from "rxjs";




@IonicPage()
@Component({
  selector: 'page-appareil',
  templateUrl: 'appareil.html',
})
export class AppareilPage  implements OnInit, OnDestroy {



  appareilList: Appareil[];
  appareilSubscription: Subscription;

  constructor(private navCtrl: NavController,
              private menuCtrl: MenuController,
              public modalCtrl: ModalController,
              public navParams: NavParams,
              public appareilService: AppareilService,
              public toastCtrl: ToastController,
              public loaddingCtrl: LoadingController) {}

  ngOnInit() {
this.appareilSubscription = this.appareilService.appareils$.subscribe((appareils: Appareil[]) =>{
  this.appareilList = appareils.slice();
    }
    );
this.appareilService.emitAppareil();


  }

    onLoadAppareil(index: number) {
      let modal = this.modalCtrl.create(SingleAppareilPage, {index: index});
      modal.present();
  }
  onToggleMenu() {
    this.menuCtrl.open();
  }
  onNewAppareil(){
    this.navCtrl.push(AppareilFormPage);

  }
  ngOnDestroy() {
    this.appareilSubscription.unsubscribe();
  }
  onSaveList() {
    let loader = this.loaddingCtrl.create({
      content: 'Sauvgarde en cours..'
    });
    loader.present();
    this.appareilService.saveData().then(
      () => {
        loader.dismiss();
        this.toastCtrl.create({
          message: 'Données sauvgardées !',
          duration: 3000,
          position: 'bottom'
        }).present();
      }
    ).catch(
      (error) => {
        loader.dismiss();
        this.toastCtrl.create({
          message: error,
          duration: 3000,
          position: 'bottom'
        }).present();
      }
    );
  }

  onFetchList() {
    let loader = this.loaddingCtrl.create({
      content: 'Récuperation en cours..'
    });
    loader.present();
    this.appareilService.retrieveData().then(
      () => {
        loader.dismiss();
        this.toastCtrl.create({
          message: 'Données récupérées!',
          duration: 3000,
          position: 'bottom'
        }).present();
      }
    ).catch(
      (error) => {
        loader.dismiss();
        this.toastCtrl.create({
          message: error,
          duration: 3000,
          position: 'bottom'
        }).present();
      }
    );
  }


}
