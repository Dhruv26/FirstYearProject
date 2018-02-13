import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



 declare var google: any;

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  @ViewChild('map') mapRef: ElementRef;
  map: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.showMap();
    console.log('ionViewDidLoad ProfilePage');
    console.log(this.mapRef);
  }

  showMap(){
    // Location - lat long
    const location = new google.maps.LatLng(53.628673, -2.171036);

    // Map options
    const options = {
      center: location,
      zoom: 17,
      //mapTypeId: google.maps.MapTypeId.HYBRID
    }

    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
  }

}
