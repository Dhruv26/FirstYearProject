import { Component } from '@angular/core';
//import { FileEncryption } from '@ionic-native/file-encryption';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignUpPage } from '../sign-up/sign-up';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
    
  }
}
