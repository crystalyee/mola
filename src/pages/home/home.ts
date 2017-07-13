import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Database } from '../../providers/database';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	private userName: string;
	private molaName: string;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

  }

  changeUserName(){
  	let alert = this.alertCtrl.create({
  		title: 'Change User Name',
  		inputs: [{
  			name: 'userName',
 		}],
 		buttons: [
 			{
 				text:'Cancel',
 				role:'cancel',
 				handler: () => {
 					console.log('Canceled name change');
 				}
 			},
 			{
 				text:'Confirm',
 				handler: data => {
 					this.userName = data.userName;
 				}

 			}
 		]
  	});
  	alert.present();
  }

  changeMolaName(){

  }

}
