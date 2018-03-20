import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { User } from '../../models/User';
import { Storage } from '@ionic/storage';
//import { Md5 } from 'ts-md5/dist/md5';
import { Md5} from 'ts-md5/dist/md5';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  user = {} as User;
  url:any  = "../../assets/Default.png";
  name:string = "Loading...";
  email:string = "Loading...";
  phone:string = "Loading...";
  birthDate:string = "1999-07-17";
  sports:string[] = ["Football"];

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private alertCtrl: AlertController,) {
  }

  ionViewDidLoad() {
    //let checkURL = this.storage.get('photoUrl') as string;
    //let checkEmail = this.storage.get('email') as string;
    /*
    this.storage.set('name', body.name);
    this.storage.set('email', body.userName);
    this.storage.set('phone', body.phoneNumber);
    this.storage.set('favouriteSports', body.favouriteSports);*/

    this.storage.get('photoUrl').then(data => {
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
  
  }
  save(){
    console.log("Data to be updated");
    console.log(this.birthDate);
    console.log(this.sports);
    this.storage.set('phone', this.phone);
    this.storage.set('favouriteSports', this.sports);
    this.storage.set('dateOfBirth', this.birthDate); 


    let alert = this.alertCtrl.create({
      title: 'Settings saved',
      message: 'The settings were saved successfully',
      buttons: ['Dismiss']
    })
    alert.present();
  }
  emailChanged(){
    this.url = ("https://www.gravatar.com/avatar/" + Md5.hashStr(this.email.toString()));
  }

}
