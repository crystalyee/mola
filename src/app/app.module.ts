import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SettingsPage } from '../pages/settings/settings';
import { MarketPage } from '../pages/market/market';
import { ItemsPage } from '../pages/items/items';

import { Database } from '../providers/database';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
//import { MolaItem } from '../providers/mola-item/mola-item';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ItemsPage,
    MarketPage,
    SettingsPage, 

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ItemsPage,
    MarketPage,
    SettingsPage,
  ],
  providers: [
    SQLite,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Database
  ]
})
export class AppModule {}

export class MolaItem {
  private id: number;
  private name: string;
  private icon: string;
  private quantity: number;
  private cost: number;
  private description: string;
  private type: string;


  constructor(id: number, name: string, icon: string, quantity: number, cost: number, description: string, type: string) {
    this.id = id;
    this.name = name;
    this.icon = icon;
    this.quantity = quantity;
    this.cost = cost;
    this.description = description;
    this.type = type;
  }

  getId()
  {
    return this.id;
  }

  getName()
  {
    return this.name;
  }

  getIcon()
  {
    return this.icon;
  }

  getQuantity()
  {
    return this.quantity;
  }

  getCost()
  {
    return this.cost;
  }

  getDescription()
  {
    return this.description;
  }

  getType()
  {
    return this.type;
  }
}

