import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ToastController } from 'ionic-angular';
import { User } from '../../models/User';
import { Storage } from '@ionic/storage';
import { Md5 } from 'ts-md5/dist/md5';
import { Http, Headers } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {

  notifications: any[] = [];

    //below are variables used for hard coded data
    umair:string = "https://www.gravatar.com/avatar/" + "760edda6c248d22bb197bb31a7ac69e2"  + "?s=300";
    akbar:string = "https://www.gravatar.com/avatar/" + "a5bc9bcd7030dea895f8d15d9581b7fd"  + "?s=300";

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController,public loadingCtrl: LoadingController,
    public toastCtrl: ToastController, public http: Http, public storage: Storage) {

    this.getNotifications();
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad NotificationsPage');
  }

  Accept(notification:any)
  {
    this.updateRequestStatus(notification.requestID, true);
    let index = this.notifications.indexOf(notification);
    if (index > -1){
      this.notifications.splice(index, 1);
    }
    this.presentToast("Accepted request");
  }

  Reject(notification:any){
    console.log(notification);
    this.updateRequestStatus(notification.requestID, false);

    let index = this.notifications.indexOf(notification);
    if (index > -1){
      this.notifications.splice(index, 1);
    }
    this.presentToast("Rejected request");
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 1500,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  getNotifications()
  {
    this.storage.get('id').then(data => {
      let url = 'api/request/forUser/' + data;
      this.http.get(url).subscribe(response => {
        this.notifications = JSON.parse((<any>response)._body);
        console.log(this.notifications);
      }, error => {
        console.log(error);
      });
    });
  }

  updateRequestStatus(requestId, status: bool)
  {
    let url = 'api/request/acceptRequest/' + requestId + '/' + status;
    this.http.post(url, {}, {}).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

}
