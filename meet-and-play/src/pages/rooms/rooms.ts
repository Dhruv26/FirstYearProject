import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
//import { CreateRoomPage } from '../create-room/create-room';
import { JoinRoomPage } from '../join-room/join-room';
import { PopoverController } from 'ionic-angular';
import { CreateRoomPage } from '../create-room/create-room';
import { RoomChatPage } from '../room-chat/room-chat';
import { Storage } from '@ionic/storage';
import { Http, Headers } from '@angular/http';


@IonicPage()
@Component({
  selector: 'page-rooms',
  templateUrl: 'rooms.html',
})
export class RoomsPage {

  //Variable to hold suggestion to put in html
  suggestion:any = "test";
  suggestions:any = "test2";

  rooms: any[] = [];
  url: string = '../../assets/imgs/basketball.png';

  constructor(public popoverCtrl: PopoverController, public navCtrl: NavController, public navParams: NavParams,
              private alertCtrl: AlertController, public storage: Storage, public http: Http) {

    this.getRooms();
    this.suggestions = [
      {id: 1, info: "Kickboxing, Sudden center"},
      {id: 2, info: "Football, Falinge Park"},
      {id: 3, info: "Basketball, Spotland Rd."},
      {id: 4, info: "Football, some place"},
      {id: 5, info: "Boxing, Hamer"},
      {id: 6, info: "Tenis, Springfield Park"},
      {id: 7, info: "Netball, some place"},
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoomsPage');

    //Room ID for the button and name for information

    for (let i = 0; i < this.suggestions.length; i++)
    {
      let suggestion = this.suggestions[i];
    }

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
  joinSuggestion(id:any)
  {
    let alert = this.alertCtrl.create({
      title: 'Join room with ID: ' + id + "?",
      message: 'Are you sure you want to join this room?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('No clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Yes clicked')
          }
        }
      ]

    });
    alert.present();
  }
  chat()
  {
    this.navCtrl.push(RoomChatPage);
  }

  getRooms()
  {
    this.storage.get('id').then(data => {
      let url = 'api/user/userRooms/' + data;
      this.http.get(url).subscribe(response => {
        this.rooms = JSON.parse((<any>response)._body);
        console.log(this.rooms);
      }, error => {
        console.log(error);
      });
    });
  }


}
