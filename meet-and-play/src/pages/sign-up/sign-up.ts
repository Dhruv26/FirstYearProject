import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from '../../models/User';
import { AdditionalInfoPage } from '../additional-info/additional-info';
import { Http, Headers } from '@angular/http';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
    this.user.url = "http://192.168.1.67:3390/UserImg/Default.png";
  }

  Additional()
  {
    this.signUp();
    //Below line is for debug use
    //Uncomment the part below enable no-sign-up required
    //*
    let alert = this.alertCtrl.create({
      title: 'DEBUG MODE',
      message: 'DEBUG MOD IS ENABLED. ALLOWING ACCESS TO NEXT PAGE',
      buttons: ['Dismiss']
    })
    alert.present();
    this.navCtrl.push(AdditionalInfoPage);
    //*/
  }

  signUp()
  {
    let data = { 'name': this.user.username, 'email': this.user.email, 'password': this.user.password, "confirmPassword": this.user.password2 };
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post('api/account/register', JSON.stringify(data), {headers: headers})
      .subscribe(response => {
        if(response.status == 200)
          this.navCtrl.setRoot(AdditionalInfoPage);
      }, (error) => {
        console.log(error);
      });
    /*
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
      this.navCtrl.push(AdditionalInfoPage);
      //this.navCtrl.pop();
    }
    */
  }

}
