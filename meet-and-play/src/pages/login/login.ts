import { Component } from '@angular/core';
//import { FileEncryption } from '@ionic-native/file-encryption';
import { IonicPage, NavController, NavParams, AlertController, Tabs } from 'ionic-angular';
import { SignUpPage } from '../sign-up/sign-up';
import { ProfilePage } from '../profile/profile'
import { User } from '../../models/User';
import { TabsPage } from '../tabs/tabs';
import { Http, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';
import { Md5} from 'ts-md5/dist/md5';

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
  url:any  = "../../assets/imgs/Default.png";

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public http: Http, private storage: Storage) {
    // this.tabBarElement = document.querySelector('.tabbar');
  }

  ionViewDidLoad() {
    /* this.tabBarElement.style.display = 'none';
    setTimeout(() => {
      this.splash = false;
      this.tabBarElement.style.display = 'none';
    }, 4000); */
    this.storage.get('id').then(data => {
      if(data != null)
        this.navCtrl.setRoot(TabsPage);
    });
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

  setUser(email: string)
  {
    let url = 'api/user/userByEmail/' + email;
    console.log(url);
    this.http.get(url).subscribe(response => {
      if(response.status == 200)
      {
        this.setStorage(JSON.parse(response._body));
      }
    });
  }

  setStorage(body)
  {
    this.storage.set('id', body.id);
    this.storage.set('name', body.name);
    this.storage.set('email', body.userName);
    this.storage.set('phone', body.phoneNumber);
    this.storage.set('favouriteSports', body.favouriteSports);
    this.storage.set('photoUrl', body.photoUrl);
  }

  signIn()
  {
    //this.navCtrl.setRoot(TabsPage);
    //this.navCtrl.setRoot(TabsPage);

    let data = { 'email': this.user.email, 'password': this.user.password };
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post('api/account/login', JSON.stringify(data), {headers: headers})
      .subscribe(response => {
        if(response.status == 200)
        {
          this.setUser(this.user.email);
          this.navCtrl.setRoot(TabsPage);
        }
      }, (error) => {
        console.log(error.status);
      });

  }
  emailChanged()
  {
    this.url = ("https://www.gravatar.com/avatar/" + Md5.hashStr(this.user.email.toString()) + "?s=400");
  }
}
