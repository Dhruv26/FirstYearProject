import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { CreateRoomPage } from '../pages/create-room/create-room';
import { JoinRoomPage } from '../pages/join-room/join-room';
import { ProfilePage } from '../pages/profile/profile';
import { RoomChatPage } from '../pages/room-chat/room-chat';
import { RoomInformationPage } from '../pages/room-information/room-information';
import { RoomsPage } from '../pages/rooms/rooms';
import { SignUpPage } from '../pages/sign-up/sign-up';

import { AdditionalInfoPage } from '../pages/additional-info/additional-info';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
