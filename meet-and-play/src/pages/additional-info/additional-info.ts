import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/User';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdditionalInfoPage');
    this.imgSrc = "http://192.168.1.67:3390/UserImg/Default.png";
    //"192.168.1.67:3390/UserImg/Default.png"
    //this.setInitMessage();

    this.imgList = this.http.get('http://192.168.1.67:3390/UserImg/?tpl=list');
  }


}
