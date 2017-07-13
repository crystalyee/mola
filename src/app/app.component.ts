import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Database } from '../providers/database';


import { HomePage } from '../pages/home/home';
import { ItemsPage } from '../pages/items/items';
import { MarketPage } from '../pages/market/market';
import { SettingsPage } from '../pages/settings/settings';

@Component({
  templateUrl: 'app.html',
  providers: [Database]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, image: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public database: Database) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', image: "../www/assets/img/temp.png", component: HomePage },
      { title: 'Items', image: "../www/assets/img/temp.png", component: ItemsPage},
      { title: 'Market', image: "../www/assets/img/temp.png", component: MarketPage},
      { title: 'Settings', image: "../www/assets/img/temp.png", component: SettingsPage},
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();


    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
