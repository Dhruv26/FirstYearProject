import { Component } from '@angular/core';
//import { FileEncryption } from '@ionic-native/file-encryption';
import { IonicPage, NavController, NavParams, AlertController, Tabs } from 'ionic-angular';
import { SignUpPage } from '../sign-up/sign-up';
import { ProfilePage } from '../profile/profile'
import { User } from '../../models/User';
import { TabsPage } from '../tabs/tabs'; 

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  splash = true;
  tabBarElement: any;
  hideMe = false;
  forgotPass = false;
  user = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    this.tabBarElement = document.querySelector('.tabbar');
  }

  ionViewDidLoad() {
    this.tabBarElement.style.display = 'none';
    setTimeout(() => {
      this.splash = false;
      this.tabBarElement.style.display = 'flex';
    }, 4000);
  }
  hide() 
  {
  
  this.hideMe = !this.hideMe;
  
  }
  forgot()
  {
  
  this.forgotPass = !this.forgotPass;
  
  }
  signUp()
  {
    this.navCtrl.push(SignUpPage);
  }
  signIn()
  {
    if ((this.user.username == null) || (this.user.username == ""))
    {
      let alert = this.alertCtrl.create({
        title: 'Validation failed',
        message: 'Email is required',
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
    else if (this.user.username != "AkbarRamzan")
    {
      let alert = this.alertCtrl.create({
        title: 'Validation failed',
        message: 'Username is incorrect',
        buttons: ['Dismiss']
      })
      alert.present();
    }
    else if (this.user.password != "password")
    {
      let alert = this.alertCtrl.create({
        title: 'Validation failed',
        message: 'Password is incorrect',
        buttons: ['Dismiss']
      })
      alert.present();
    }
    else
    {
      //this.navCtrl.push(ProfilePage);
      this.navCtrl.setRoot(ProfilePage, {opentab: 2});
    }
    
  }
}
