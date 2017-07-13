import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Database } from '../../providers/database';
import { MolaItem } from '../../providers/mola-item/mola-item';

/**
 * Generated class for the Items page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-items',
  templateUrl: 'items.html',
})
export class ItemsPage {
	private items;

  constructor(public navCtrl: NavController, public navParams: NavParams, public database: Database) 
  {
  	this.items = [];
  }

  ionViewDidLoad() 
  {
    console.log('ionViewDidLoad Items');
  }

}
