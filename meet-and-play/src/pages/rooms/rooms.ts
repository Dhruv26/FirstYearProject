import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { CreateRoomPage } from '../create-room/create-room';
import { JoinRoomPage } from '../join-room/join-room';
import { PopoverController } from 'ionic-angular';
import { CreateRoomPage } from '../create-room/create-room';

/**
 * Generated class for the RoomsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rooms',
  templateUrl: 'rooms.html',
})
export class RoomsPage {

  constructor(public popoverCtrl: PopoverController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoomsPage');
  }
  CreateRoom() {
    /*
    let popover = this.popoverCtrl.create(CreateRoomPage);
    popover.present();
    */
    this.navCtrl.push(CreateRoomPage, {});
  }
  JoinRoom() {
    this.navCtrl.push(JoinRoomPage, {});
  }


}