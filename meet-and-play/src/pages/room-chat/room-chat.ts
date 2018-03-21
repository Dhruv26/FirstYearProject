import { Component, ViewChild, OnInit, AfterViewChecked} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Content } from 'ionic-angular/navigation/nav-interfaces';
import { RoomsPage } from '../rooms/rooms';

/**
 * Generated class for the RoomChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-room-chat',
  templateUrl: 'room-chat.html',
})
export class RoomChatPage{

  @ViewChild(scroll) content: Content;

  //hard coded, should be id or name
  roomName:string = "aRoomName";
  messages:any = [];
  newMessage:string;

  //below are variables used for hard coded data
  umair:string = "https://www.gravatar.com/avatar/" + "760edda6c248d22bb197bb31a7ac69e2"  + "?s=300";
  akbar:string = "https://www.gravatar.com/avatar/" + "a5bc9bcd7030dea895f8d15d9581b7fd"  + "?s=300";

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    //below is hard coded data to be replaced by database values
    //https://www.gravatar.com/avatar/
    this.messages = [
      {url: this.umair, name: "Umair Tahir", content: "This is the first message"},
      {url: this.akbar, name: "Akbar Ramzan", content: "Wow that is a good message"},
      {url: this.umair, name: "Umair Tahir", content: "Bla bla bla"},
      {url: this.akbar, name: "Akbar Ramzan", content: "Very long bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla."},
      {url: this.umair, name: "Umair Tahir", content: "emoji test 1 😋"},
      {url: this.akbar, name: "Akbar Ramzan", content: "more 😀 😁 😂 😃 😄 😅 😆 "},
      {url: this.umair, name: "Umair Tahir", content: "Bla bla bla"},
      {url: this.umair, name: "Umair Tahir", content: "Bla bla bla"},
    ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoomChatPage');
    this.scrollToBottom();
  }

  back(){
    this.navCtrl.setRoot(RoomsPage);
  }
  send(){
    //Below is send function hard coded
    //Change url to user.url and name to user.name
    console.log("Send key pressed");
    if ((this.newMessage != "") && (this.newMessage != null))
    {
      this.messages.push({url: "https://www.gravatar.com/avatar/default", name: "Admin", content: this.newMessage});
    }
    this.newMessage = "";
    this.scrollToBottom();
  }
  scrollToBottom(){
    //this.content.scollTo();

  }



}
