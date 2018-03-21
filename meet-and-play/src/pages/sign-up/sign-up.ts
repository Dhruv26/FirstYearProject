import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from '../../models/User';
import { AdditionalInfoPage } from '../additional-info/additional-info';
import { Http, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public http: Http, private storage: Storage) {
  }

  ionViewDidLoad() {
    this.user.url = "http://192.168.1.67:3390/UserImg/Default.png";
  }

  emailChanged(){
    console.log(this.email);
  }

  signUp()
  {
    let data = { 'name': this.user.name, 'email': this.user.email, 'password': this.user.password, "confirmPassword": this.user.confirmPassword };
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post('api/account/register', JSON.stringify(data), {headers: headers})
      .subscribe(response => {
        if(response.status == 200)
        {
          this.storage.set('email', this.user.email);
          this.navCtrl.setRoot(AdditionalInfoPage);
        }
      }, (error) => {
        let errorString = "";
        let parsedError = JSON.parse(error._body);
        errorString += (parsedError.Name != null) ? '<p>' + parsedError.Name + '</p>' : "";
        errorString += (parsedError.Email != null) ? '<p>' + parsedError.Email + '</p>' : "";
        errorString += (parsedError.Password != null) ? '<p>' + parsedError.Password + '</p>' : "";
        errorString += (parsedError.ConfirmPassword != null) ? '<p>' + parsedError.ConfirmPassword + '</p>' : "";
        errorString += (parsedError[0] != null) ? '<p>' + parsedError[0].description + '</p>' : "";
        let alert = this.alertCtrl.create({
          title: 'Incorrect details',
          message: errorString,
          buttons: ['Dismiss']
        });
        alert.present();
      });
  }

}
