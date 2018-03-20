import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Events } from 'ionic-angular';
import { User } from '../../models/User';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  user = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public storage: Storage, public events: Events) {
  }

  logout()
  {
    this.events.publish('user:logout');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
    this.user.allowNotifications = true;
    this.user.showLocation = false;
    this.user.nameVisible = true;
    this.user.performanceRatings = false;
  }
  save()
  {
    let alert = this.alertCtrl.create({
      title: 'Settings saved',
      message: 'The settings were saved successfully',
      buttons: ['Dismiss']
    })
    alert.present();

  }

}
