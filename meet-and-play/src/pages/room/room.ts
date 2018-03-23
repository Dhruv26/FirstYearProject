import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {} from '@types/googlemaps';
import { User } from '../../models/User';
import { Http, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';


declare var google: any;


@IonicPage()
@Component({
  selector: 'page-room',
  templateUrl: 'room.html',
})
export class RoomPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  roomId: string;
  ball: string = '../../assets/imgs/basketball.png';
  sport: string;
  time: any;
  lat: any;
  lng: any;
  users: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public storage: Storage, public alertCtrl: AlertController) {
    this.roomId = navParams.get('id');
    this.sport = navParams.get('sport');
    this.time = new Date(navParams.get('time'));
    this.lat = navParams.get('lat');
    this.lng = navParams.get('lng');
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.showMap();
      this.getUsersInRoom();
    }, 300);
  }

  showMap(){
    let latLng = new google.maps.LatLng(this.lat, this.lng);
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLng
    });
  }

  getUsersInRoom()
  {
    let url = 'api/rooms/getMembers/' + this.roomId;
    this.http.get(url).subscribe(response => {
      this.users = JSON.parse((<any>response)._body);
      console.log(this.users);
    });
  }

  checkRequest()
  {
    this.storage.get('id').then(data => {
      let url = 'api/request/existingRequest/' + data + '/' + this.roomId;
      this.http.get(url).subscribe(response => {
        if((<any>response)._body == 'false')
        {
          //setTimeout(() => {
            this.sendRequest(data);
          //}, 300);
        }
        else
        {
          let alert = this.alertCtrl.create({ 'message': 'Request already sent', buttons: ['Ok'] });
          alert.present();
        }
      });
    });
  }

  sendRequest(data)
  {
    let requestData = { 'userID': data, 'roomID': this.roomId };
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post('api/request', JSON.stringify(requestData), { headers: headers }).subscribe(response => {
        console.log(response);
        let alert = this.alertCtrl.create({ 'message': 'Request sent successfully', buttons: ['Ok'] });
        alert.present();
      }, error => {
        console.log(error);
      });

  }

}
