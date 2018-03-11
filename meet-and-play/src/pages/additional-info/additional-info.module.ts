import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdditionalInfoPage } from './additional-info';

@NgModule({
  declarations: [
    AdditionalInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(AdditionalInfoPage),
  ],
})
export class AdditionalInfoPageModule {}
