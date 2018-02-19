import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from '../../models/User';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  user = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  signUp()
  {
    if ((this.user.email == null) || (this.user.email == ""))
    {
      let alert = this.alertCtrl.create({
        title: 'Validation failed',
        message: 'Email is required',
        buttons: ['Dismiss']
      })
      alert.present();
    }
    else if ((this.user.username == null) || (this.user.username == ""))
    {
      let alert = this.alertCtrl.create({
        title: 'Validation failed',
        message: 'Username is required',
        buttons: ['Dismiss']
      })
      alert.present();
    }
    else if ((this.user.password == null) || (this.user.password == ""))
    {
      let alert = this.alertCtrl.create({
        title: 'Validation failed',
        message: 'Password is required',
        buttons: ['Dismiss']
      })
      alert.present();
    }
    else if ((this.user.password2 == null) || (this.user.password2 == ""))
    {
      let alert = this.alertCtrl.create({
        title: 'Validation failed',
        message: 'You must repeat your password',
        buttons: ['Dismiss']
      })
      alert.present();
    }
    else if (this.user.password != this.user.password2) 
    {
      let alert = this.alertCtrl.create({
        title: 'Validation failed',
        message: 'The passwords do not match',
        buttons: ['Dismiss']
      })
      alert.present();
    }
    else if ((this.user.name == null) || (this.user.name == ""))
    {
      let alert = this.alertCtrl.create({
        title: 'Validation failed',
        message: 'Name is required',
        buttons: ['Dismiss']
      })
      alert.present();
    }
    else
    {
      let alert = this.alertCtrl.create({
        title: 'Account created',
        message: 'The account was successfully created, you may now login',
        buttons: ['Dismiss']
      })
      alert.present();
      this.navCtrl.pop();
    }
  }

}
