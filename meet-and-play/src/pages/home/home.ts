import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { User } from '../../models/User';
import { Http, Headers } from '@angular/http';
import {} from '@types/googlemaps';

declare var google: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  user = {} as User;

  constructor(public navCtrl: NavController, public http: Http, public events: Events) {
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.showMap();
      this.getRoomsLocations();
    }, 300);
  }

  showMap(){
    let latLng = new google.maps.LatLng(53.4808, -2.2426);
    let mapOptions = {
      center: latLng,
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

  addMarker(location, roomID, sport, time, lat, long){
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: location
    });

    google.maps.event.addListener(marker, 'click', () => {
      this.events.publish('user:roomPage', roomID, sport, time, lat, long);
    });
  }

  addInfoWindow(marker, content){
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }

  getRoomsLocations()
  {
    // this.http.get('api/account/info').subscribe(response => console.log(response));
    this.http.get('api/rooms')
      .subscribe(response => {
        if(response.status == 200)
        {
          this.placeMarkers(JSON.parse((<any>response)._body));
        }
      }, (error) => {
        console.log(error.status);
      });
  }


  placeMarkers(locations)
  {
    for(let i = 0; i < locations.length; i++)
    {
      let latLng = new google.maps.LatLng(locations[i].venueLat, locations[i].venueLong);
      this.addMarker(latLng, locations[i].roomID, locations[i].sport, locations[i].time, locations[i].venueLat, locations[i].venueLong);
    }
  }

  createRoom()
  {
    this.events.publish('user:createRoom');
  }

}
