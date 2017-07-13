import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AlertController } from 'ionic-angular';
import { Database } from '../../providers/database';

/**
 * Generated class for the Settings page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

	private userName: string;
	private molaName: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public database: Database) {
    this.userName = this.database.userName;
    this.molaName = this.database.molaName;
  }
  

/*
  ngAfterViewInit(): any {
    this.load();
  }

  public load(){
    this.userName = this.database.getUserName();
    this.molaName = this.database.getMolaName();
  }
*/

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
 					this.database.updateDatabaseValue( 'playerInfo', 'userName' , data.userName);
 					this.userName = data.userName;
 				}

 			}
 		]
  	});
  	alert.present();


  }

  changeMolaName(){
  	let alert = this.alertCtrl.create({
  		title: 'Change Mola Name',
  		inputs: [{
  			name: 'molaName',
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
 					this.database.updateDatabaseValue( 'playerInfo', 'molaName' , data.molaName);
 					this.molaName = data.molaName;
 				}

 			}
 		]
  	});

  	alert.present();
  }

  

}
