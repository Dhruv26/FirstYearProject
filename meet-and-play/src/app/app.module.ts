import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MapsProvider } from '../providers/maps/maps';

//Profile picture
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';

import { IonicStorageModule } from '@ionic/storage';

//Md5 checksum
//import { Md5 } from 'ts-md5/dist/md5';
//import { Md5 } from 'ts-md5/dist/md5';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    CreateRoomPage,
    JoinRoomPage,
    ProfilePage,
    RoomChatPage,
    RoomInformationPage,
    RoomsPage,
    SignUpPage,
    AdditionalInfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot(),
    //Md5,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    CreateRoomPage,
    JoinRoomPage,
    ProfilePage,
    RoomChatPage,
    RoomInformationPage,
    RoomsPage,
    SignUpPage,
    AdditionalInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MapsProvider,
    FileTransfer,
    FileTransferObject,
    File,
    Camera,
    HttpModule,
    //Md5
    //FileUploadOptions,

  ]
})
export class AppModule {}
