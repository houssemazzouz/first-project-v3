import {Appareil} from "../models/Appareil";
import {Subject} from "rxjs";
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

export class AppareilService {
  appareils$ = new Subject<Appareil[]>();
      appreilList: Appareil[] = [
        {
          name: 'machine',
          description: [
            'Volume 6 litre',
            'Temps de lavage: 2 heures',
            'Consommation: 173 kWh/an'
          ],
          isOn: true,
          startTime: '',
          endTime: ''

        },
        {
          name: 'television',
          description: [
            'dimension: 40 pouces',
            'Consommation: 22kWh/an'
          ],
          isOn: true,
          startTime: '',
          endTime: ''

        },

        {
          name: 'ordinateur',
          description: [
            'Marque: fait maison',
            'Consoomation: 500kWh/an'
          ],
          isOn: false,
          startTime: '',
          endTime: ''
        }
      ];
      addAppareil(appareil: Appareil) {
        this.appreilList.push(appareil);
        this.emitAppareil();
      }

      emitAppareil() {
        this.appareils$.next(this.appreilList.slice());
      }
      saveData(){
        return new Promise((resolve, reject) =>{
          firebase.database().ref('appareils').set(this.appreilList).then(
            (data: DataSnapshot) =>{
              resolve(data);
            }
          ).catch(
            (error) => {
            reject(error)
          }
          );
        });
      }
      retrieveData(){
return new Promise((resolve,reject) =>{
  firebase.database().ref('appareils').once('value').then(
    (data: DataSnapshot) => {
      this.appreilList = data.val();
      this.emitAppareil();
      resolve('Données recupere avec succes')
    }
  ).catch(
    (error) => {
      reject(error);
    }
  );
});
      }
    }
