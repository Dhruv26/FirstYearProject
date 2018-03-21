import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { User } from '../../models/User';
import { TabsPage } from '../tabs/tabs';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { AlertController } from 'ionic-angular';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Md5 } from 'ts-md5/dist/md5';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the AdditionalInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-additional-info',
  templateUrl: 'additional-info.html',
})
export class AdditionalInfoPage {

  user = {} as User;
  imgSrc:any = "http://192.168.1.67:3390/UserImg/Default.png";
  imgInitList:any="";
  imgList:any = "Not loaded";
  imageURI:any;
  imageFileName:any;
  email:string = "Loading...";
  url:any  = "../../assets/imgs/Default.png";

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http,
    private transfer: FileTransfer,
    private camera: Camera,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private storage: Storage) {
  }

  ionViewDidLoad() {
    this.getUserData();
    console.log('ionViewDidLoad AdditionalInfoPage');
    this.imgSrc = "http://192.168.1.67:3390/UserImg/Default.png";
    //"192.168.1.67:3390/UserImg/Default.png"
    //this.setInitMessage();
    this.storage.get('email').then(data2 => {
      this.email=data2;
      console.log("Got email: " + this.email);
      if (this.email != null)
      {
        console.log("email is defined")
        this.url = ("https://www.gravatar.com/avatar/" + Md5.hashStr(this.email.toString()) + "?s=400");
      }
    });

    this.imgList = this.getList();
  }

  getUserData()
  {
    this.storage.get('email').then(data => {
      let url = 'api/user/userByEmail/' + data;
      this.http.get(url).subscribe(response => {
        this.setUser(JSON.parse(response._body));
        console.log(response);
      }, errors => {
        console.log(errors);
      });
    });
  }

  setUser(body)
  {
    this.storage.set('id', body.id);
    this.storage.set('name', body.name);
  }

  getList() {
    return new Promise(resolve => {
      this.http.get('http://192.168.1.67:3390/UserImg/?tpl=list').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((imageData) => {
      this.imageURI = imageData;
    }, (err) => {
      console.log(err);
      this.presentToast("No camera detected");

      window.open("https://en.gravatar.com/?logout=1");
    });
  }
  uploadFile() {
    let loader = this.loadingCtrl.create({
      content: "Uploading..."
    });
    loader.present();
    const fileTransfer: FileTransferObject = this.transfer.create();

    let options: FileUploadOptions = {
      fileKey: 'ionicfile',
      fileName: 'ionicfile',
      chunkedMode: false,
      mimeType: "image/jpeg",
      headers: {}
    }

    fileTransfer.upload(this.imageURI, 'http://192.168.1.67:8080/api/uploadImage', options)
      .then((data) => {
      console.log(data+" Uploaded Successfully");
      this.imageFileName = "http://192.168.1.67:8080/static/images/ionicfile.jpg"
      loader.dismiss();
      this.presentToast("Image uploaded successfully");
    }, (err) => {
      console.log(err);
      loader.dismiss();
      this.presentToast(err);
    });
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  update()
  {
    this.storage.set('phone', this.user.phone);
    this.storage.set('favouriteSports', this.user.favouriteSports);
    this.storage.set('birthDate', this.user.birthDate);
    this.storage.set('photoUrl', this.user.photoUrl);

    this.storage.get('id').then(data => {
      let url = 'api/user/' + data;
      let parsedSports = "";
      if(this.user.favouriteSports != null)
      {
        for(let i = 0; i < this.user.favouriteSports.length; i++)
          parsedSports += this.user.favouriteSports[i] + '|';
      }
      let requestData = { 'phone': this.user.phone, 'photoUrl': url, 'birthDate': this.user.birthDate, 'favouriteSports': parsedSports };
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.put(url, JSON.stringify(requestData), { headers: headers}).subscribe(response => {
        this.navCtrl.setRoot(TabsPage);
      }, error => {
        console.log(error);
      });
    });
  }
}
