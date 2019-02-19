import { Component, OnInit } from '@angular/core';
import {NavParams, ViewController} from 'ionic-angular';
import {Appareil} from "../../../models/Appareil";
import {AppareilService} from "../../../services/appareil.service";
import {NgForm} from "@angular/forms";



@Component({
  selector: 'page-single-appareil',
  templateUrl: 'single-appareil.html',
})
export class SingleAppareilPage implements OnInit{
appareil: Appareil
index: number;
  constructor( public navParams: NavParams,private  viewCtrl: ViewController,private appareilService: AppareilService) {
  }


ngOnInit() {
  this.index = this.navParams.get('index');
  this.appareil = this.appareilService.appreilList[this.index];
}
  dismissModal() {
  this.viewCtrl.dismiss();
  }
onToggleAppratiel() {
  this.appareil.isOn = !this.appareil.isOn;
}
  onSubmitForm(form: NgForm) {
    console.log(form.value);
    this.dismissModal();
  }
  onDeleteHoraire() {
    this.appareil.startTime = '';
    this.appareil.endTime = '' ;
    this.dismissModal();

  }

}
