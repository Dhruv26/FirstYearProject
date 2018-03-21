import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { User } from '../../models/User';
import { Storage } from '@ionic/storage';
//import { Md5 } from 'ts-md5/dist/md5';
import { Md5 } from 'ts-md5/dist/md5';
import { Http, Headers } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  user = {} as User;
  url:any  = "../../assets/Default.png";
  id: string;
  name:string = "Loading...";
  email:string = "Loading...";
  phone:string = "Loading...";
  birthDate:string = "1999-07-17";
  sports:string[] = ["Football"];

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private alertCtrl: AlertController, public http: Http) {
  }

  ionViewDidLoad() {
    this.storage.get('id').then(data => this.id = data);
    this.storage.get('name').then(data => this.name = data);
    this.storage.get('email').then(data => this.email = data);
    this.storage.get('phone').then(data => this.phone = data);
    this.storage.get('favouriteSports').then(data => this.sports = data);
    this.storage.get('birthDate').then(data => this.birthDate = data);
    this.storage.get('photoUrl').then(data => {
      if(data == null)
      {
        this.url = ("https://www.gravatar.com/avatar/" + Md5.hashStr(this.email.toString()) + "?s=400");
      }
    });


    /*this.storage.get('photoUrl').then(data => {
    this.storage.get('email').then(data2 => {
    this.storage.get('name').then(data3 => {
    this.storage.get('phone').then(data4 => {
    this.storage.get('favouriteSports').then(data5 => {

    //Modify this stub
    this.storage.get('dateOfBirth').then(data6 => {

      this.email = data2;
      this.name = data3;
      this.phone = data4
      this.sports = data5;
      this.birthDate = data6

    console.log('ionViewDidLoad ProfilePage');
    if (data == null)
    {
      console.log("No url defined")
      if (this.email != null)
      {
        console.log("email is defined")
        this.url = ("https://www.gravatar.com/avatar/" + Md5.hashStr(this.email.toString()) + "?s=400");
      }
      else{
        console.log("no email is defined");
        this.url = ("../../assets/imgs/Default.png");
        this.email=("undefined");
      }
    }
    else
    {
      console.log("A photo URL was found");
      console.log("URL: " + data);
      this.url = this.storage.get('photoUrl').toString();
    }
  });});});});});});
*/
  }

  emailChanged(){
    this.url = ("https://www.gravatar.com/avatar/" + Md5.hashStr(this.email.toString()));
  }

  save()
  {
    let data = { 'id': this.id, 'phoneNumber': this.phone, 'favouriteSports': this.sports, 'photoUrl': this.url, 'birthDate': this.birthDate };
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.post('api/user', JSON.stringify(data), { headers: headers }).subscribe(response => {
      if(response.status == 200)
      {
        this.storage.set('phone', this.phone);
        this.storage.set('photoUrl', this.url);
        this.storage.set('birthDate', this.birthDate);
        
        let alert = this.alertCtrl.create({
          title: 'Profie updated',
          message: 'Your profile has been updated successfully',
          buttons: ['Dismiss']
        });
        alert.present();
      }
    })
  }

}
