import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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
  sport: string;
  lat: any;
  lng: any;
  marker: google.maps.Marker;

    /**
   * Set Date and Time to default value in he date/time picker
   */
  private dateOfEvent: String= new Date().toISOString();

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public alertCtrl: AlertController) {
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
    if(this.marker != null)
      this.marker.setMap(null);
    this.marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: location
    });
  }

  createRoom(){
    let data = { 'sport': this.sport, 'time': this.dateOfEvent, 'venueLat': this.lat, "venueLong": this.lng };
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post('api/rooms', JSON.stringify(data), {headers: headers})
      .subscribe(response => {
        if(response.status == 200)
        {
          let alert = this.alertCtrl.create({
            message: 'Your room has been successfully created',
            buttons: [ { text: 'Ok', handler: () => { this.navCtrl.pop(); } }]
          });
          alert.present();
        }
      }, (error) => {
        console.log(error);
      });
  }

}
