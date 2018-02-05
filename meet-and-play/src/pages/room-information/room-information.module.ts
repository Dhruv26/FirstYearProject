import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RoomInformationPage } from './room-information';

@NgModule({
  declarations: [
    RoomInformationPage,
  ],
  imports: [
    IonicPageModule.forChild(RoomInformationPage),
  ],
})
export class RoomInformationPageModule {}
