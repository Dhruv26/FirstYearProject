import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { CreateRoomPage } from '../create-room/create-room';
import { JoinRoomPage } from '../join-room/join-room';
import { ProfilePage } from '../profile/profile';
import { RoomChatPage } from '../room-chat/room-chat';
import { RoomInformationPage } from '../room-information/room-information';
import { RoomsPage } from '../rooms/rooms';
import { NotificationsPage } from '../notifications/notifications';
import { IonicPage, NavController, Tabs, Events } from 'ionic-angular';
import { ViewChild} from '@angular/core';
import { User } from '../../models/User';
import { RoomPage } from '../room/room';

import { Http, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1 = HomePage;
  tab2 = RoomsPage;
  tab3 = ProfilePage;
  tab4 = NotificationsPage;

  @ViewChild('primaryTabs') primaryTabs: Tabs;

  constructor(public navCtrl: NavController, private storage: Storage, public events: Events, public http: Http)
  {
    setTimeout(() => {
      this.storage.get('id').then( data => {
        if(data == null)
          this.navCtrl.setRoot(LoginPage);
      });
    }, 200);

    events.subscribe('user:logout', () => {
      this.logout();
    });

    events.subscribe('user:createRoom', () => {
      this.navCtrl.push(CreateRoomPage);
    });

    events.subscribe('user:roomPage', (roomID, sport, time, lat, lng) => {
      this.navCtrl.push(RoomPage, { id: roomID, sport: sport, time: time, lat: lat, lng: lng });
    });
  }

  ionViewDidEnter() {
    this.primaryTabs.select(0);
    //this.primaryTabs. setColor();
  }

  logout()
  {
    this.storage.remove('id');
    this.storage.remove('email');
    this.storage.remove('name');
    this.storage.remove('favouriteSports');
    this.storage.remove('phone');
    this.storage.remove('photoUrl');
    this.http.post('api/account/logout', {}, {}).subscribe(response => { console.log(response); }, error => {});
    this.navCtrl.setRoot(LoginPage);
  }

}
