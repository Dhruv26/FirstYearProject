import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public http: Http) {
  }

  ionViewDidLoad() {
    this.showMap();
    this.getRoomsLocations();
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

  addMarker(location){
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: location
    });

    let content = "<h4>Information!</h4>";

    this.addInfoWindow(marker, content);
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
          this.placeMarkers(JSON.parse(response._body));
        }
      }, (error) => {
        console.log(error.status);
      });
  }

  placeMarkers(locations)
  {
    for(let i = 0; i < locations.length; i++)
    {
      console.log(locations[i]);
      let latLng = new google.maps.LatLng(locations[i].venueLat, locations[i].venueLong);
      this.addMarker(latLng);
    }
  }

  createRoom()
  {
  }

}
