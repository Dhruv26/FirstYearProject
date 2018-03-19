webpackJsonp([10],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoinRoomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the JoinRoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JoinRoomPage = (function () {
    function JoinRoomPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    JoinRoomPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JoinRoomPage');
    };
    JoinRoomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-join-room',template:/*ion-inline-start:"C:\Users\ibn_e\meet-and-play\meet-and-play\src\pages\join-room\join-room.html"*/'<!--\n\n  Generated template for the JoinRoomPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Back to Rooms</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class = "background" >\n\n    <h1 class = heading>Join room</h1>\n\n    <ion-card>\n\n      <ion-card-header>\n\n        Search for a room\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <ion-list>\n\n            <ion-item>\n\n              <strong>Test_Content</strong>\n\n            </ion-item>\n\n          </ion-list>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col>\n\n              <button ion-button (click)="CreateRoom()" color = "danger" block outline>Join Room</button>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\ibn_e\meet-and-play\meet-and-play\src\pages\join-room\join-room.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], JoinRoomPage);
    return JoinRoomPage;
}());

//# sourceMappingURL=join-room.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdditionalInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the AdditionalInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdditionalInfoPage = (function () {
    function AdditionalInfoPage(navCtrl, navParams, http, transfer, camera, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.transfer = transfer;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.user = {};
        this.imgSrc = "http://192.168.1.67:3390/UserImg/Default.png";
        this.imgInitList = "";
        this.imgList = "Not loaded";
    }
    AdditionalInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdditionalInfoPage');
        this.imgSrc = "http://192.168.1.67:3390/UserImg/Default.png";
        //"192.168.1.67:3390/UserImg/Default.png"
        //this.setInitMessage();
        this.imgList = this.getList();
    };
    AdditionalInfoPage.prototype.getList = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('http://192.168.1.67:3390/UserImg/?tpl=list').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    AdditionalInfoPage.prototype.getImage = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.imageURI = imageData;
        }, function (err) {
            console.log(err);
            _this.presentToast(err);
        });
    };
    AdditionalInfoPage.prototype.uploadFile = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Uploading..."
        });
        loader.present();
        var fileTransfer = this.transfer.create();
        var options = {
            fileKey: 'ionicfile',
            fileName: 'ionicfile',
            chunkedMode: false,
            mimeType: "image/jpeg",
            headers: {}
        };
        fileTransfer.upload(this.imageURI, 'http://192.168.1.67:8080/api/uploadImage', options)
            .then(function (data) {
            console.log(data + " Uploaded Successfully");
            _this.imageFileName = "http://192.168.1.67:8080/static/images/ionicfile.jpg";
            loader.dismiss();
            _this.presentToast("Image uploaded successfully");
        }, function (err) {
            console.log(err);
            loader.dismiss();
            _this.presentToast(err);
        });
    };
    AdditionalInfoPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    AdditionalInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-additional-info',template:/*ion-inline-start:"C:\Users\ibn_e\meet-and-play\meet-and-play\src\pages\additional-info\additional-info.html"*/'<!--\n\n  Generated template for the AdditionalInfoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n      <ion-title>Back to Sign up</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n\n\n<ion-content class = "background" >\n\n    <h1 class = heading>Meet \'n\' Play</h1>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      ADDITIONAL INFO\n\n    </ion-card-header>\n\n    <ion-item>\n\n      <ion-label floating color = "dark">Phone number</ion-label>\n\n      <ion-input type = "tel" [(ngModel)]="user.phone"></ion-input>\n\n    </ion-item>\n\n      <ion-list>\n\n          <ion-item>\n\n            <ion-label floating color = "dark">Preferred sports</ion-label>\n\n            <ion-select [(ngModel)]="sports" multiple="true" >\n\n              <ion-option value="Football" >Football</ion-option>\n\n              <ion-option value="Basket Ball">Basket Ball</ion-option>\n\n              <ion-option value="Boxing" >Boxing</ion-option>\n\n              <ion-option value="Tenis">Tenis</ion-option>\n\n              <ion-option value="mushrooms">NetBall</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-list>\n\n        <ion-item>\n\n          <ion-label floating color = "dark">Date of birth</ion-label>\n\n          <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="myDate"></ion-datetime>\n\n        </ion-item>\n\n        <!-- Removed in favour of fab button\n\n        <ion-item>\n\n          <a ion-button color = "danger" block outline ion-button (click)="signUp()">Sign Up</a>\n\n        </ion-item>\n\n      -->\n\n    </ion-card>\n\n    <!--Internal ip. For release, use afzalramzan786.hopto.org:3390/ instead of IP-->\n\n    <img [src] ="imgSrc" alt="imgSrc" height="512" width="512">\n\n    <!--<p>{{imgList}}</p>-->\n\n    <!--\n\n    <ion-item>\n\n      <a ion-button color = "danger" block outline ion-button (click)="uploadFile()">Upload or take picture</a>\n\n    </ion-item>-->\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <button ion-button color = "danger" block outline\n\n          ion-button (click)="getImage()">Take/ choose picture </button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button ion-button color = "danger" block outline\n\n           ion-button (click)="uploadFile()" >Upload image</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  <ion-fab bottom right #fab>\n\n    <button ion-fab>\n\n      <ion-icon name = "arrow-dropright"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\ibn_e\meet-and-play\meet-and-play\src\pages\additional-info\additional-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], AdditionalInfoPage);
    return AdditionalInfoPage;
}());

//# sourceMappingURL=additional-info.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_up_sign_up__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { FileEncryption } from '@ionic-native/file-encryption';




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, alertCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.splash = true;
        this.hideMe = false;
        this.forgotPass = false;
        this.user = {};
        this.tabBarElement = document.querySelector('.tabbar');
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.tabBarElement.style.display = 'none';
        setTimeout(function () {
            _this.splash = false;
            _this.tabBarElement.style.display = 'none';
        }, 4000);
    };
    LoginPage.prototype.hide = function () {
        this.hideMe = !this.hideMe;
    };
    LoginPage.prototype.forgot = function () {
        this.forgotPass = !this.forgotPass;
    };
    LoginPage.prototype.signUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__sign_up_sign_up__["a" /* SignUpPage */]);
    };
    LoginPage.prototype.signIn = function () {
        var _this = this;
        var data = { 'email': this.user.username, 'password': this.user.password };
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        this.http.post('api/account/login', JSON.stringify(data), { headers: headers })
            .subscribe(function (response) {
            if (response.status == 200)
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
        }, function (error) {
            console.log(error.status);
        });
        /*
        if ((this.user.username == null) || (this.user.username == ""))
        {
          let alert = this.alertCtrl.create({
            title: 'Validation failed',
            message: 'Email is required',
            buttons: ['Dismiss']
          })
          alert.present();
        }
        else if ((this.user.password == null) || (this.user.password == ""))
        {
          let alert = this.alertCtrl.create({
            title: 'Validation failed',
            message: 'Password is required',
            buttons: ['Dismiss']
          })
          alert.present();
        }
        else if (this.user.username != "AkbarRamzan")
        {
          let alert = this.alertCtrl.create({
            title: 'Validation failed',
            message: 'Username is incorrect',
            buttons: ['Dismiss']
          })
          alert.present();
        }
        else if (this.user.password != "password")
        {
          let alert = this.alertCtrl.create({
            title: 'Validation failed',
            message: 'Password is incorrect',
            buttons: ['Dismiss']
          })
          alert.present();
        }
        else
        {
          //Enable the tabs
          this.tabBarElement.style.display = 'flex';
          //this.navCtrl.push(ProfilePage);
          this.navCtrl.setRoot(ProfilePage, {opentab: 2});
        }
        */
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\ibn_e\meet-and-play\meet-and-play\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n\n\n  Creating custom login page\n\n\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n-->\n\n<div id="custom-overlay" [style.display]="splash ? \'flex\': \'none\'">\n\n  <div class="flb">\n\n    <div class="Aligner-item Aligner-item--top"></div>\n\n    <img src="assets/Logo.png" alt = "image">\n\n    <div class="Aligner-item Aligner-item--bottom"></div>\n\n  </div>\n\n</div>\n\n<ion-content class = "background" >\n\n  <h1 class = heading>Meet \'n\' Play</h1>\n\n  <ion-card>\n\n    <ion-card-header color = "light">\n\n      LOGIN\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-list no-lines>\n\n        <ion-item>\n\n          <ion-label floating color = "light" >Email</ion-label>\n\n          <ion-input type = "text" [(ngModel)]="user.username"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating color = "light">Password</ion-label>\n\n          <ion-input type = "password" [(ngModel)]="user.password"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n     <a ion-button color = "light" block outline ion-button (click)="forgot()">Forgot Password</a>\n\n        </ion-item>\n\n      </ion-list>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <button ion-button color = "light" block outline\n\n            ion-button (click)="signIn()">Sign in</button>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <button ion-button color = "light" block outline\n\n             ion-button (click)="signUp()" >Sign up</button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n      <!--\n\n      <b>OR</b>\n\n      <button ion-button color = "light" ion-left block>\n\n      <ion-icon name = "logo-google"> </ion-icon>\n\n      <div>Login with google</div>\n\n      </button> -->\n\n     \n\n	\n\n<div *ngIf="hideMe">\n\n	\n\n      \n\n   <div class  = "create User">\n\n   <div class = "item item-avatar">\n\n      <h2 *ngIf="hideMe">Creating an account</h2>\n\n   </div>\n\n   <div class = "item item-body">\n\n      Please enter you details below \n\n <ion-item>\n\n          <ion-label floating color = "light">Username</ion-label>\n\n          <ion-input type = "text"></ion-input>\n\n        </ion-item>  \n\n<ion-item>\n\n          <ion-label floating color = "light">Email</ion-label>\n\n          <ion-input type = "text"></ion-input>\n\n        </ion-item>\n\n\n\n<ion-list>\n\n  <ion-item>\n\n    <ion-label floating color = "light">Sports</ion-label>\n\n    <ion-select [(ngModel)]="toppings" multiple="true" >\n\n      <ion-option value="Football" >Football</ion-option>\n\n      <ion-option value="Basket Ball">Basket Ball</ion-option>\n\n      <ion-option value="Boxing" >Boxing</ion-option>\n\n      <ion-option value="Tenis">Tenis</ion-option>\n\n      <ion-option value="mushrooms">NetBall</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n</ion-list>\n\n<ion-item>\n\n  <ion-label floating color = "light">Date of birth</ion-label>\n\n  <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="myDate"></ion-datetime>\n\n</ion-item>\n\n\n\n<ion-item>\n\n          <ion-label floating color = "light">Forename</ion-label>\n\n          <ion-input type = "text"></ion-input>\n\n        </ion-item>\n\n<ion-item>\n\n          <ion-label floating color = "light">Surname</ion-label>\n\n          <ion-input type = "text"></ion-input>\n\n        </ion-item> \n\n<ion-item>\n\n          <ion-label floating color = "light">Password</ion-label>\n\n          <ion-input type = "text"></ion-input>\n\n        </ion-item> \n\n<ion-item>\n\n          <ion-label floating color = "light">Confirm Password</ion-label>\n\n          <ion-input type = "text"></ion-input>\n\n        </ion-item> \n\n<ion-item>\n\n<button ion-button color = "light" block outline ion-button (click)="hide()">CREATE ACCOUNT</button>       \n\n</ion-item>\n\n</div>\n\n</div>\n\n  \n\n</div>\n\n\n\n<div *ngIf="forgotPass" >\n\n  <p style = "color: white">Please enter your email address so we can send you a password reset email</p>\n\n  <ion-item>\n\n    <ion-label floating color = "light">Enter Email</ion-label>\n\n    <ion-input type = "text"></ion-input>\n\n  </ion-item>\n\n  <button ion-button color = "light" block outline ion-button (click)="forgot()">Send Email</button>  \n\n\n\n</div>\n\n\n\n    </ion-card-content>\n\n\n\n  </ion-card>\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\ibn_e\meet-and-play\meet-and-play\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__additional_info_additional_info__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignUpPage = (function () {
    function SignUpPage(navCtrl, navParams, alertCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.user = {};
    }
    SignUpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignUpPage');
        this.user.url = "http://192.168.1.67:3390/UserImg/Default.png";
    };
    SignUpPage.prototype.Additional = function () {
        this.signUp();
        //Below line is for debug use
        //Uncomment the part below enable no-sign-up required
        //*
        var alert = this.alertCtrl.create({
            title: 'DEBUG MODE',
            message: 'DEBUG MOD IS ENABLED. ALLOWING ACCESS TO NEXT PAGE',
            buttons: ['Dismiss']
        });
        alert.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__additional_info_additional_info__["a" /* AdditionalInfoPage */]);
        //*/
    };
    SignUpPage.prototype.signUp = function () {
        var _this = this;
        var data = { 'name': this.user.username, 'email': this.user.email, 'password': this.user.password, "confirmPassword": this.user.password2 };
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        this.http.post('api/account/register', JSON.stringify(data), { headers: headers })
            .subscribe(function (response) {
            if (response.status == 200)
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__additional_info_additional_info__["a" /* AdditionalInfoPage */]);
        }, function (error) {
            console.log(error);
        });
        /*
        if ((this.user.email == null) || (this.user.email == ""))
        {
          let alert = this.alertCtrl.create({
            title: 'Validation failed',
            message: 'Email is required',
            buttons: ['Dismiss']
          })
          alert.present();
        }
        else if ((this.user.username == null) || (this.user.username == ""))
        {
          let alert = this.alertCtrl.create({
            title: 'Validation failed',
            message: 'Username is required',
            buttons: ['Dismiss']
          })
          alert.present();
        }
        else if ((this.user.password == null) || (this.user.password == ""))
        {
          let alert = this.alertCtrl.create({
            title: 'Validation failed',
            message: 'Password is required',
            buttons: ['Dismiss']
          })
          alert.present();
        }
        else if ((this.user.password2 == null) || (this.user.password2 == ""))
        {
          let alert = this.alertCtrl.create({
            title: 'Validation failed',
            message: 'You must repeat your password',
            buttons: ['Dismiss']
          })
          alert.present();
        }
        else if (this.user.password != this.user.password2)
        {
          let alert = this.alertCtrl.create({
            title: 'Validation failed',
            message: 'The passwords do not match',
            buttons: ['Dismiss']
          })
          alert.present();
        }
        else if ((this.user.name == null) || (this.user.name == ""))
        {
          let alert = this.alertCtrl.create({
            title: 'Validation failed',
            message: 'Name is required',
            buttons: ['Dismiss']
          })
          alert.present();
        }
        else
        {
          let alert = this.alertCtrl.create({
            title: 'Account created',
            message: 'The account was successfully created, you may now login',
            buttons: ['Dismiss']
          })
          alert.present();
          this.navCtrl.push(AdditionalInfoPage);
          //this.navCtrl.pop();
        }
        */
    };
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-up',template:/*ion-inline-start:"C:\Users\ibn_e\meet-and-play\meet-and-play\src\pages\sign-up\sign-up.html"*/'<!--\n\n  Generated template for the SignUpPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n      <ion-title>Back to login</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n\n\n<ion-content class = "background" >\n\n    <h1 class = heading>Meet \'n\' Play</h1>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      SIGN UP\n\n    </ion-card-header>\n\n    <ion-list no-lines>\n\n      <ion-item>\n\n        <ion-label floating color = "dark">Full name</ion-label>\n\n        <ion-input type = "text" [(ngModel)]="user.name"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating color = "dark">Email</ion-label>\n\n        <ion-input type = "email" [(ngModel)]="user.email"></ion-input>\n\n      </ion-item>\n\n      <!-- Removed as using email to login\n\n      <ion-item>\n\n        <ion-label floating color = "dark">Choose a Username</ion-label>\n\n        <ion-input type = "text" [(ngModel)]="user.username"></ion-input>\n\n      </ion-item>\n\n    -->\n\n      <ion-item>\n\n        <ion-label floating color = "dark">Input Password</ion-label>\n\n        <ion-input type = "password" [(ngModel)]="user.password"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating color = "dark">Repeat Password</ion-label>\n\n        <ion-input type = "password" [(ngModel)]="user.password2"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    <!-- Moved to another page\n\n      <ion-list>\n\n          <ion-item>\n\n            <ion-label floating color = "dark">Preferred sports</ion-label>\n\n            <ion-select [(ngModel)]="sports" multiple="true" >\n\n              <ion-option value="Football" >Football</ion-option>\n\n              <ion-option value="Basket Ball">Basket Ball</ion-option>\n\n              <ion-option value="Boxing" >Boxing</ion-option>\n\n              <ion-option value="Tenis">Tenis</ion-option>\n\n              <ion-option value="mushrooms">NetBall</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-list>\n\n        <ion-item>\n\n          <ion-label floating color = "dark">Date of birth</ion-label>\n\n          <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="myDate"></ion-datetime>\n\n        </ion-item>\n\n        <ion-item>\n\n          <a ion-button color = "danger" block outline ion-button (click)="signUp()">Sign Up</a>\n\n        </ion-item>\n\n      -->\n\n  </ion-card>\n\n  <ion-fab bottom right #fab>\n\n    <button ion-fab (click)="Additional()">\n\n      <ion-icon name = "arrow-dropright"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\ibn_e\meet-and-play\meet-and-play\src\pages\sign-up\sign-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfilePage = (function () {
    function ProfilePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.user = {};
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        this.showMap();
        if (this.user.username == null)
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    ProfilePage.prototype.showMap = function () {
        var latLng = new google.maps.LatLng(53.4808, -2.2426);
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    };
    ProfilePage.prototype.addMarker = function () {
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });
        var content = "<h4>Information!</h4>";
        this.addInfoWindow(marker, content);
    };
    ProfilePage.prototype.addInfoWindow = function (marker, content) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ProfilePage.prototype, "mapElement", void 0);
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\ibn_e\meet-and-play\meet-and-play\src\pages\profile\profile.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Profile</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="addMarker()"><ion-icon name="add"></ion-icon>Add Marker</button>\n\n    </ion-buttons>  \n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class = "background" >\n\n  <h1 class = heading>User profile</h1>\n\n  <ion-col width-100>\n\n      <ion-list>\n\n        <ion-item>\n\n          <strong>Username: </strong> Akbar Ramzan\n\n        </ion-item>\n\n        <ion-item>\n\n            <strong>Favourite sport: </strong> Football\n\n          </ion-item>\n\n          <ion-item>\n\n              <strong>Account level: </strong> 35\n\n          </ion-item>\n\n          <ion-item>\n\n              <strong>Skill level: </strong> Novice\n\n          </ion-item>   \n\n          <ion-item>\n\n              <strong>Number of games played: </strong> 12\n\n          </ion-item>     \n\n      </ion-list>\n\n    </ion-col>\n\n      \n\n\n\n\n\n<ion-content>\n\n  <div #map id="map"></div> \n\n</ion-content>\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\ibn_e\meet-and-play\meet-and-play\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__join_room_join_room__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_room_create_room__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { CreateRoomPage } from '../create-room/create-room';



/**
 * Generated class for the RoomsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RoomsPage = (function () {
    function RoomsPage(popoverCtrl, navCtrl, navParams) {
        this.popoverCtrl = popoverCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RoomsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RoomsPage');
    };
    RoomsPage.prototype.CreateRoom = function () {
        /*
        let popover = this.popoverCtrl.create(CreateRoomPage);
        popover.present();
        */
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__create_room_create_room__["a" /* CreateRoomPage */], {});
    };
    RoomsPage.prototype.JoinRoom = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__join_room_join_room__["a" /* JoinRoomPage */], {});
    };
    RoomsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rooms',template:/*ion-inline-start:"C:\Users\ibn_e\meet-and-play\meet-and-play\src\pages\rooms\rooms.html"*/'<!--\n\n  Generated template for the RoomsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Rooms</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n-->\n\n\n\n<ion-content class = "background" >\n\n    <h1 class = heading>Rooms</h1>\n\n    <ion-card>\n\n      <ion-card-header>\n\n        Choose an option\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-6>\n\n              <button ion-button (click)="CreateRoom()" color = "danger" block outline>Create Room</button>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n              <button ion-button (click)="JoinRoom()" color = "danger" block outline>Join Room</button>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n        <ion-list>\n\n            <ion-item>\n\n              <strong>Local suggestions: </strong>\n\n            </ion-item>\n\n            <ion-item>\n\n                <strong>Chinese Kickboxing, </strong> Sudden community centre\n\n                <button ion-button color = "danger"> Join </button>\n\n              </ion-item>\n\n              <ion-item>\n\n                  <strong>Football for teenagers, </strong> Falinge Park \n\n                  <button ion-button color = "danger"> Join </button>\n\n              </ion-item>\n\n              <ion-item>\n\n                  <strong>Cricket for all novice players, </strong> Falinge Park\n\n                  <button ion-button color = "danger"> Join </button>\n\n              </ion-item>   \n\n          </ion-list>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\ibn_e\meet-and-play\meet-and-play\src\pages\rooms\rooms.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], RoomsPage);
    return RoomsPage;
}());

//# sourceMappingURL=rooms.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateRoomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CreateRoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateRoomPage = (function () {
    function CreateRoomPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CreateRoomPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateRoomPage');
    };
    CreateRoomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-room',template:/*ion-inline-start:"C:\Users\ibn_e\meet-and-play\meet-and-play\src\pages\create-room\create-room.html"*/'<!--\n\n  Generated template for the RoomsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Rooms</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n      <ion-title>Back to Rooms</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n\n\n<ion-content class = "background" >\n\n    <h1 class = heading>Create a room</h1>\n\n    <ion-card>\n\n      <ion-card-header>\n\n        Form\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <ion-list>\n\n            <ion-item>\n\n              <strong>Test_Content</strong>\n\n            </ion-item>\n\n          </ion-list>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col>\n\n              <button ion-button (click)="CreateRoom()" color = "danger" block outline>Create Room</button>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\ibn_e\meet-and-play\meet-and-play\src\pages\create-room\create-room.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CreateRoomPage);
    return CreateRoomPage;
}());

//# sourceMappingURL=create-room.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.user = {};
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
        this.user.allowNotifications = true;
        this.user.showLocation = false;
        this.user.nameVisible = true;
        this.user.performanceRatings = false;
    };
    SettingsPage.prototype.save = function () {
        var alert = this.alertCtrl.create({
            title: 'Settings saved',
            message: 'The settings were saved successfully',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Users\ibn_e\meet-and-play\meet-and-play\src\pages\settings\settings.html"*/'<!--\n\n  Generated template for the SettingsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Settings</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n-->\n\n\n\n<ion-content class = "background" >\n\n    <h1 class = heading>Settings</h1>\n\n    <ion-card>\n\n      <ion-card-header>\n\n        Choose an option\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <ion-list>\n\n            <ion-item>\n\n                <ion-label>Allow notifications</ion-label>\n\n                <ion-toggle [(ngModel)]="user.allowNotifications" ng-checked="user.allowNotifications"></ion-toggle>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label>Allow other users to see my name</ion-label>\n\n                <ion-toggle [(ngModel)]="user.nameVisible" ng-checked="user.nameVisible"></ion-toggle>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label>Allow location sharing</ion-label>\n\n                <ion-toggle [(ngModel)]="user.showLocation" checked="user.showLocation"></ion-toggle>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label>Allow users to rate my performance</ion-label>\n\n                <ion-toggle [(ngModel)]="user.performanceRatings" checked="user.performanceRatings"></ion-toggle>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label>Enhance the contrast of the application</ion-label>\n\n                <ion-toggle [(ngModel)]="user.enhancedContrast" disabled="true"></ion-toggle>\n\n            </ion-item>      \n\n          </ion-list>\n\n          <ion-grid>\n\n          <ion-row>\n\n            <ion-col col-12>\n\n              <button ion-button color = "danger" block outline ion-button (click)="save()">Save Settings</button>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\ibn_e\meet-and-play\meet-and-play\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/additional-info/additional-info.module": [
		303,
		9
	],
	"../pages/create-room/create-room.module": [
		310,
		8
	],
	"../pages/join-room/join-room.module": [
		302,
		7
	],
	"../pages/login/login.module": [
		304,
		6
	],
	"../pages/profile/profile.module": [
		306,
		5
	],
	"../pages/room-chat/room-chat.module": [
		305,
		4
	],
	"../pages/room-information/room-information.module": [
		307,
		3
	],
	"../pages/rooms/rooms.module": [
		308,
		2
	],
	"../pages/settings/settings.module": [
		309,
		1
	],
	"../pages/sign-up/sign-up.module": [
		311,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 164;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RoomChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RoomChatPage = (function () {
    function RoomChatPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RoomChatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RoomChatPage');
    };
    RoomChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-room-chat',template:/*ion-inline-start:"C:\Users\ibn_e\meet-and-play\meet-and-play\src\pages\room-chat\room-chat.html"*/'<!--\n\n  Generated template for the RoomChatPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Room chat</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\ibn_e\meet-and-play\meet-and-play\src\pages\room-chat\room-chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], RoomChatPage);
    return RoomChatPage;
}());

//# sourceMappingURL=room-chat.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomInformationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RoomInformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RoomInformationPage = (function () {
    function RoomInformationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RoomInformationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RoomInformationPage');
    };
    RoomInformationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-room-information',template:/*ion-inline-start:"C:\Users\ibn_e\meet-and-play\meet-and-play\src\pages\room-information\room-information.html"*/'<!--\n\n  Generated template for the RoomInformationPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Room information</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\ibn_e\meet-and-play\meet-and-play\src\pages\room-information\room-information.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], RoomInformationPage);
    return RoomInformationPage;
}());

//# sourceMappingURL=room-information.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(233);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_create_room_create_room__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_join_room_join_room__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_room_chat_room_chat__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_room_information_room_information__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_rooms_rooms__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_settings_settings__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_sign_up_sign_up__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_additional_info_additional_info__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_maps_maps__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_file_transfer__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_file__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_camera__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















//Profile picture



var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_create_room_create_room__["a" /* CreateRoomPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_join_room_join_room__["a" /* JoinRoomPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_room_chat_room_chat__["a" /* RoomChatPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_room_information_room_information__["a" /* RoomInformationPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_rooms_rooms__["a" /* RoomsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_additional_info_additional_info__["a" /* AdditionalInfoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/join-room/join-room.module#JoinRoomPageModule', name: 'JoinRoomPage', segment: 'join-room', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/additional-info/additional-info.module#AdditionalInfoPageModule', name: 'AdditionalInfoPage', segment: 'additional-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/room-chat/room-chat.module#RoomChatPageModule', name: 'RoomChatPage', segment: 'room-chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/room-information/room-information.module#RoomInformationPageModule', name: 'RoomInformationPage', segment: 'room-information', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rooms/rooms.module#RoomsPageModule', name: 'RoomsPage', segment: 'rooms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-room/create-room.module#CreateRoomPageModule', name: 'CreateRoomPage', segment: 'create-room', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_create_room_create_room__["a" /* CreateRoomPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_join_room_join_room__["a" /* JoinRoomPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_room_chat_room_chat__["a" /* RoomChatPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_room_information_room_information__["a" /* RoomInformationPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_rooms_rooms__["a" /* RoomsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_additional_info_additional_info__["a" /* AdditionalInfoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_21__providers_maps_maps__["a" /* MapsProvider */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_file_transfer__["b" /* FileTransferObject */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */]
                //FileUploadOptions,
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\ibn_e\meet-and-play\meet-and-play\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\ibn_e\meet-and-play\meet-and-play\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\ibn_e\meet-and-play\meet-and-play\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      About\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\ibn_e\meet-and-play\meet-and-play\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\ibn_e\meet-and-play\meet-and-play\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Contact\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-start></ion-icon>\n\n      @ionicframework\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\ibn_e\meet-and-play\meet-and-play\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\ibn_e\meet-and-play\meet-and-play\src\pages\home\home.html"*/'\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\ibn_e\meet-and-play\meet-and-play\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the MapsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MapsProvider = (function () {
    function MapsProvider(http) {
        this.http = http;
        console.log('Hello MapsProvider Provider');
    }
    MapsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], MapsProvider);
    return MapsProvider;
}());

//# sourceMappingURL=maps.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__profile_profile__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rooms_rooms__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
//import { Component } from '@angular/core';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.tab1 = __WEBPACK_IMPORTED_MODULE_0__profile_profile__["a" /* ProfilePage */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_1__rooms_rooms__["a" /* RoomsPage */];
        this.tab3 = __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* SettingsPage */];
    }
    TabsPage.prototype.ionViewDidEnter = function () {
        this.primaryTabs.select(1);
        //this.primaryTabs. setColor();
    };
    TabsPage.prototype.tabChanged = function (env) {
        console.log(env);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_8" /* ViewChild */])('primaryTabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* Tabs */])
    ], TabsPage.prototype, "primaryTabs", void 0);
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\ibn_e\meet-and-play\meet-and-play\src\pages\tabs\tabs.html"*/'<ion-icon name="tab-home"></ion-icon>\n\n<ion-tabs name="primaryTabs" tabsLayout="icon-top" tabsPlacement="bottom" (ionChange)="tabChanged($event)" #primaryTabs>\n\n  <ion-tab [root]="tab2" tabTitle="Rooms" tabIcon="information-circle"></ion-tab>\n\n  <ion-tab [root]="tab1" tabTitle="home" tabIcon="tab-home" icon-on="home" icon-off="home"></ion-tab>\n\n  <ion-tab [root]="tab3" tabTitle="Settings" tabIcon="cog"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\ibn_e\meet-and-play\meet-and-play\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[211]);
//# sourceMappingURL=main.js.map