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

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = LoginPage;
  tab2Root = ProfilePage;
  tab3Root = RoomsPage;
  tab4Root = SettingsPage;

  constructor() {

  }
}
