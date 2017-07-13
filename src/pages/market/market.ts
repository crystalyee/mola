import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Database } from '../../providers/database';
//import { MolaItem } from '../../providers/mola-item/mola-item';
import { MolaItem } from '../../app/app.module'

/**
 * Generated class for the Market page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-market',
  templateUrl: 'market.html',
})
export class MarketPage {
	private foodList;
	private healthList;
	private funList;


  constructor(public navCtrl: NavController, public navParams: NavParams, public database: Database) 
  {
  	this.foodList = new Array<MolaItem>();
  	this.healthList = new Array<MolaItem>();
  	this.funList = new Array<MolaItem>();


  	this.foodList.push( new MolaItem(0, "Jelly Fish", "../www/assets/img/temp.png", 1, 5, "A mola's favorite food", "food") );
  	this.foodList.push( new MolaItem(1, "Mussel Milk", "../www/assets/img/temp.png", 1, 10, "Freshly squeezed from mussels. How does that work?", "food") );

  	this.healthList.push( new MolaItem(2, "Sun Lotion", "../www/assets/img/temp.png", 1, 10, "A must have for sunbathing!", "health") );

  	this.funList.push( new MolaItem(3, "Clammic Markers", "../www/assets/img/temp.png", 1, 300, "The best markers money can buy. It'll cost you an arm and a leg.", "health") );

  }

  ionViewDidLoad() 
  {
    console.log('ionViewDidLoad Market');
  }

}
