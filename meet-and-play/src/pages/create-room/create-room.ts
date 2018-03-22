import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import {} from '@types/googlemaps';

declare var google;

@IonicPage()
@Component({
  selector: 'page-create-room',
  templateUrl: 'create-room.html',
})
export class CreateRoomPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  sports: string;
  lat: any;
  lng: any;
  marker: google.maps.Marker;
  
    /**
   * Set Date and Time to default value in he date/time picker
   */
  private dateOfEvent: String= new Date().toISOString(); 

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }

  ionViewDidLoad() {
    this.showMap();
  }

  showMap(){
    let latLng = new google.maps.LatLng(53.4808, -2.2426);
    let mapOptions = {
      center: latLng,
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    google.maps.event.addListener(this.map, 'click', (location) => {
      this.lat = location.latLng.lat();
      this.lng = location.latLng.lng();
      let latLng = new google.maps.LatLng(this.lat, this.lng);
      this.addMarker(latLng, this.mapElement.nativeElement, mapOptions);
    });
  }

  addMarker(location, nativeElement, mapOptions){
  this.map = new google.maps.Map(nativeElement, mapOptions);
    this.marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: location
    });
  google.maps.event.addListener(this.map, 'click', (location) => {
      this.lat = location.latLng.lat();
      this.lng = location.latLng.lng();
      let latLng = new google.maps.LatLng(this.lat, this.lng);
      this.addMarker(latLng,nativeElement, mapOptions);
    });
  }

  createRoom(){

  }

}
