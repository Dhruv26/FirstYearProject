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
import { SettingsPage } from '../settings/settings';
import { IonicPage, NavController, Tabs, Events } from 'ionic-angular';
import { ViewChild} from '@angular/core';
import { User } from '../../models/User';

import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1 = HomePage;
  tab2 = RoomsPage;
  tab3 = SettingsPage;

  @ViewChild('primaryTabs') primaryTabs: Tabs;

  constructor(public navCtrl: NavController, private storage: Storage, public events: Events)
  {
    events.subscribe('user:logout', () => {
      this.logout();
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
    this.navCtrl.setRoot(LoginPage);
  }

}
