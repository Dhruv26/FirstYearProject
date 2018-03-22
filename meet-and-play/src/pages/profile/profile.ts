import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Events} from 'ionic-angular';
import { User } from '../../models/User';
import { Storage } from '@ionic/storage';
//import { Md5 } from 'ts-md5/dist/md5';
import { Md5 } from 'ts-md5/dist/md5';
import { Http, Headers } from '@angular/http';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  user = {} as User;
  sports: string = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage,
              private alertCtrl: AlertController, public http: Http, public events: Events) {
  }

  ionViewDidLoad() {
    this.storage.get('id').then(data => this.user.id = data);
    this.storage.get('name').then(data => this.user.name = data);
    this.storage.get('email').then(data => this.user.email = data);
    this.storage.get('phone').then(data => this.user.phone = data);
    this.storage.get('favouriteSports').then(data => {
      let splitString = data.split("|");
      for(let i = 0; i < splitString.length; i++)
        this.sports.push(splitString[i]);
      this.user.favouriteSports = this.sports;
    });
    this.storage.get('birthDate').then(data => this.user.birthDate = data);
    this.storage.get('photoUrl').then(data => {
        this.user.photoUrl = ("https://www.gravatar.com/avatar/" + Md5.hashStr(this.user.email.toString()) + "?s=400");
    });
  }

  emailChanged(){
    this.user.photoUrl = ("https://www.gravatar.com/avatar/" + Md5.hashStr(this.user.email.toString()));
  }

  save()
  {
    console.log(this.user.favouriteSports);
    this.storage.get('id').then(data => {
      let url = 'api/user/' + data;
      let parsedSports = "";
      if(this.user.favouriteSports != null)
      {
        for(let i = 0; i < this.user.favouriteSports.length; i++)
          parsedSports += this.user.favouriteSports[i] + '|';
      }
      let requestData = { 'phone': this.user.phone, 'photoUrl': this.user.photoUrl, 'birthDate': this.user.birthDate, 'favouriteSports': parsedSports };
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.put(url, JSON.stringify(requestData), { headers: headers}).subscribe(response => {
        let alert = this.alertCtrl.create({ message: 'You have updated your details successfully' , buttons: ['Ok'] });
        alert.present();
        this.storage.set('phone', this.user.phone);
        this.storage.set('favouriteSports', parsedSports);
        this.storage.set('birthDate', this.user.birthDate);
        this.storage.set('photoUrl', this.user.photoUrl);
      }, error => {
        console.log(error);
      });
    });
  }

  logout()
  {
    this.events.publish('user:logout');
  }

}
