webpackJsonp([11],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdditionalInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ts_md5_dist_md5__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ts_md5_dist_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(23);
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
    function AdditionalInfoPage(navCtrl, navParams, http, transfer, camera, loadingCtrl, toastCtrl, alertCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.transfer = transfer;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.user = {};
        this.imgSrc = "http://192.168.1.67:3390/UserImg/Default.png";
        this.imgInitList = "";
        this.imgList = "Not loaded";
        this.email = "Loading...";
        this.url = "../../assets/imgs/Default.png";
    }
    AdditionalInfoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.getUserData();
        console.log('ionViewDidLoad AdditionalInfoPage');
        this.imgSrc = "http://192.168.1.67:3390/UserImg/Default.png";
        //"192.168.1.67:3390/UserImg/Default.png"
        //this.setInitMessage();
        this.storage.get('email').then(function (data2) {
            _this.email = data2;
            console.log("Got email: " + _this.email);
            if (_this.email != null) {
                console.log("email is defined");
                _this.url = ("https://www.gravatar.com/avatar/" + __WEBPACK_IMPORTED_MODULE_9_ts_md5_dist_md5__["Md5"].hashStr(_this.email.toString()) + "?s=400");
            }
        });
        this.imgList = this.getList();
    };
    AdditionalInfoPage.prototype.getUserData = function () {
        var _this = this;
        this.storage.get('email').then(function (data) {
            var url = 'api/user/userByEmail/' + data;
            _this.http.get(url).subscribe(function (response) {
                if (response.status == 200)
                    _this.setUser(JSON.parse(response._body));
            }, function (errors) {
                console.log(errors);
            });
        });
    };
    AdditionalInfoPage.prototype.setUser = function (body) {
        this.storage.set('id', body.id);
        this.storage.set('name', body.name);
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
            _this.presentToast("No camera detected");
            window.open("https://en.gravatar.com/?logout=1");
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
    AdditionalInfoPage.prototype.update = function () {
        var _this = this;
        this.storage.set('phone', this.user.phone);
        this.storage.set('favouriteSports', this.user.favouriteSports);
        this.storage.set('birthDate', this.user.birthDate);
        this.storage.set('photoUrl', this.user.photoUrl);
        this.storage.get('id').then(function (data) {
            var url = 'api/user/' + data;
            var parsedSports = "";
            if (_this.user.favouriteSports != null) {
                for (var i = 0; i < _this.user.favouriteSports.length; i++)
                    parsedSports += _this.user.favouriteSports[i] + '|';
            }
            var requestData = { 'phone': _this.user.phone, 'photoUrl': url, 'birthDate': _this.user.birthDate, 'favouriteSports': parsedSports };
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.put(url, JSON.stringify(requestData), { headers: headers }).subscribe(function (response) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
            }, function (error) {
                console.log(error);
            });
        });
    };
    AdditionalInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-additional-info',template:/*ion-inline-start:"/home/chiri/Documents/meetfront/meet-and-play/meet-and-play/src/pages/additional-info/additional-info.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Additional information</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class = "background" >\n  <h1 class = smaller-heading>Tell us more about you</h1>\n  <ion-card>\n    <ion-item>\n      <ion-label floating color = "dark">Phone number</ion-label>\n      <ion-input type = "tel" [(ngModel)]="user.phone"></ion-input>\n    </ion-item>\n    <ion-item>\n            <ion-label floating color = "dark">Preferred sports</ion-label>\n            <ion-select [(ngModel)]="user.favouriteSports" multiple="true" >\n              <ion-option value="Football" >Football</ion-option>\n              <ion-option value="Basketball">Basketball</ion-option>\n              <ion-option value="Boxing" >Boxing</ion-option>\n              <ion-option value="Tennis">Tenis</ion-option>\n              <ion-option value="Netball">NetBall</ion-option>\n            </ion-select>\n    </ion-item>\n    <ion-item>\n          <ion-label floating color = "dark">Date of birth</ion-label>\n          <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="user.birthDate"></ion-datetime>\n    </ion-item>\n\n    <!--Internal ip. For release, use afzalramzan786.hopto.org:3390/ instead of IP-->\n    <img [src] ="url" alt="Profile picture">\n    <!--<p>{{imgList}}</p>-->\n    <!--\n    <ion-item>\n      <a ion-button color = "danger" block outline ion-button (click)="uploadFile()">Upload or take picture</a>\n    </ion-item>-->\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button ion-button color = "danger" block outline\n          ion-button (click)="getImage()">Create profile picture</button>\n        </ion-col>\n        <!--\n        <ion-col col-6>\n          <button ion-button color = "danger" block outline\n           ion-button (click)="uploadFile()" >Upload image</button>\n        </ion-col>-->\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n  <ion-fab bottom right #fab>\n    <button ion-fab (click)="update()">\n      <ion-icon name = "arrow-dropright"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/chiri/Documents/meetfront/meet-and-play/meet-and-play/src/pages/additional-info/additional-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["b" /* Storage */]])
    ], AdditionalInfoPage);
    return AdditionalInfoPage;
}());

//# sourceMappingURL=additional-info.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_up_sign_up__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ts_md5_dist_md5__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ts_md5_dist_md5__);
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






var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, alertCtrl, http, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.storage = storage;
        this.splash = true;
        this.hideMe = false;
        this.forgotPass = false;
        this.user = {};
        this.url = "../../assets/imgs/Default.png";
        // this.tabBarElement = document.querySelector('.tabbar');
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        /* this.tabBarElement.style.display = 'none';
        setTimeout(() => {
          this.splash = false;
          this.tabBarElement.style.display = 'none';
        }, 4000); */
        this.storage.get('id').then(function (data) {
            if (data != null)
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
        });
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
    LoginPage.prototype.setUser = function (email) {
        var _this = this;
        var url = 'api/user/userByEmail/' + email;
        console.log(url);
        this.http.get(url).subscribe(function (response) {
            if (response.status == 200) {
                _this.setStorage(JSON.parse(response._body));
            }
        });
    };
    LoginPage.prototype.setStorage = function (body) {
        this.storage.set('id', body.id);
        this.storage.set('name', body.name);
        this.storage.set('email', body.userName);
        this.storage.set('phone', body.phoneNumber);
        this.storage.set('favouriteSports', body.favouriteSports);
        this.storage.set('photoUrl', body.photoUrl);
    };
    LoginPage.prototype.signIn = function () {
        //this.navCtrl.setRoot(TabsPage);
        //this.navCtrl.setRoot(TabsPage);
        var _this = this;
        var data = { 'email': this.user.email, 'password': this.user.password };
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        this.http.post('api/account/login', JSON.stringify(data), { headers: headers })
            .subscribe(function (response) {
            if (response.status == 200) {
                _this.setUser(_this.user.email);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                //this.navCtrl.setRoot(RoomChatPage);
            }
        }, function (error) {
            console.log(error.status);
        });
    };
    LoginPage.prototype.emailChanged = function () {
        this.url = ("https://www.gravatar.com/avatar/" + __WEBPACK_IMPORTED_MODULE_6_ts_md5_dist_md5__["Md5"].hashStr(this.user.email.toString()) + "?s=400");
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/chiri/Documents/meetfront/meet-and-play/meet-and-play/src/pages/login/login.html"*/'<!--\n<div id="custom-overlay" [style.display]="splash ? \'flex\': \'none\'">\n  <div class="flb">\n    <div class="Aligner-item Aligner-item--top"></div>\n    <img src="assets/Logo.png" alt = "image">\n    <div class="Aligner-item Aligner-item--bottom"></div>\n  </div>\n</div>\n-->\n<ion-content class = "background" >\n  <h1 class = heading>Meet \'n\' Play</h1>\n  <ion-card>\n    <ion-card-header color = "light">\n      LOGIN\n    </ion-card-header>\n    <ion-card-content>\n        <img [src] ="url" alt="Profile picture" width="100px" height="100px">\n      <ion-list no-lines>\n        <ion-item>\n          <ion-label floating color = "light" >Email</ion-label>\n          <ion-input type = "text" [(ngModel)]="user.email" (change)="emailChanged()"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating color = "light">Password</ion-label>\n          <ion-input type = "password" [(ngModel)]="user.password"></ion-input>\n        </ion-item>\n        <ion-item>\n     <a ion-button color = "light" block outline ion-button (click)="forgot()">Forgot Password</a>\n        </ion-item>\n      </ion-list>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>\n            <button ion-button color = "light" block outline\n            ion-button (click)="signIn()">Sign in</button>\n          </ion-col>\n          <ion-col col-6>\n            <button ion-button color = "light" block outline\n             ion-button (click)="signUp()" >Sign up</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <!--\n      <b>OR</b>\n      <button ion-button color = "light" ion-left block>\n      <ion-icon name = "logo-google"> </ion-icon>\n      <div>Login with google</div>\n      </button> -->\n\n\n<div *ngIf="hideMe">\n\n\n   <div class  = "create User">\n   <div class = "item item-avatar">\n      <h2 *ngIf="hideMe">Creating an account</h2>\n   </div>\n   <div class = "item item-body">\n      Please enter you details below\n <ion-item>\n          <ion-label floating color = "light">Username</ion-label>\n          <ion-input type = "text"></ion-input>\n        </ion-item>\n<ion-item>\n          <ion-label floating color = "light">Email</ion-label>\n          <ion-input type = "text"></ion-input>\n        </ion-item>\n\n<ion-list>\n  <ion-item>\n    <ion-label floating color = "light">Sports</ion-label>\n    <ion-select [(ngModel)]="toppings" multiple="true" >\n      <ion-option value="Football" >Football</ion-option>\n      <ion-option value="Basket Ball">Basket Ball</ion-option>\n      <ion-option value="Boxing" >Boxing</ion-option>\n      <ion-option value="Tenis">Tenis</ion-option>\n      <ion-option value="mushrooms">NetBall</ion-option>\n    </ion-select>\n  </ion-item>\n</ion-list>\n<ion-item>\n  <ion-label floating color = "light">Date of birth</ion-label>\n  <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="myDate"></ion-datetime>\n</ion-item>\n\n<ion-item>\n          <ion-label floating color = "light">Forename</ion-label>\n          <ion-input type = "text"></ion-input>\n        </ion-item>\n<ion-item>\n          <ion-label floating color = "light">Surname</ion-label>\n          <ion-input type = "text"></ion-input>\n        </ion-item>\n<ion-item>\n          <ion-label floating color = "light">Password</ion-label>\n          <ion-input type = "text"></ion-input>\n        </ion-item>\n<ion-item>\n          <ion-label floating color = "light">Confirm Password</ion-label>\n          <ion-input type = "text"></ion-input>\n        </ion-item>\n<ion-item>\n<button ion-button color = "light" block outline ion-button (click)="hide()">CREATE ACCOUNT</button>\n</ion-item>\n</div>\n</div>\n\n</div>\n\n<div *ngIf="forgotPass" >\n  <p style = "color: white">Please enter your email address so we can send you a password reset email</p>\n  <ion-item>\n    <ion-label floating color = "light">Enter Email</ion-label>\n    <ion-input type = "text"></ion-input>\n  </ion-item>\n  <button ion-button color = "light" block outline ion-button (click)="forgot()">Send Email</button>\n\n</div>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/chiri/Documents/meetfront/meet-and-play/meet-and-play/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__additional_info_additional_info__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(23);
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
    function SignUpPage(navCtrl, navParams, alertCtrl, http, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.storage = storage;
        this.user = {};
    }
    SignUpPage.prototype.ionViewDidLoad = function () {
        // this.user.url = "http://192.168.1.67:3390/UserImg/Default.png";
    };
    SignUpPage.prototype.emailChanged = function () {
        console.log(this.user.email);
    };
    SignUpPage.prototype.signUp = function () {
        var _this = this;
        var data = { 'name': this.user.name, 'email': this.user.email, 'password': this.user.password, "confirmPassword": this.user.confirmPassword };
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        this.http.post('api/account/register', JSON.stringify(data), { headers: headers })
            .subscribe(function (response) {
            if (response.status == 200) {
                _this.storage.set('email', _this.user.email);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__additional_info_additional_info__["a" /* AdditionalInfoPage */]);
            }
        }, function (error) {
            var errorString = "";
            var parsedError = JSON.parse(error._body);
            errorString += (parsedError.Name != null) ? '<p>' + parsedError.Name + '</p>' : "";
            errorString += (parsedError.Email != null) ? '<p>' + parsedError.Email + '</p>' : "";
            errorString += (parsedError.Password != null) ? '<p>' + parsedError.Password + '</p>' : "";
            errorString += (parsedError.ConfirmPassword != null) ? '<p>' + parsedError.ConfirmPassword + '</p>' : "";
            errorString += (parsedError[0] != null) ? '<p>' + parsedError[0].description + '</p>' : "";
            var alert = _this.alertCtrl.create({
                title: 'Incorrect details',
                message: errorString,
                buttons: ['Dismiss']
            });
            alert.present();
        });
    };
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-up',template:/*ion-inline-start:"/home/chiri/Documents/meetfront/meet-and-play/meet-and-play/src/pages/sign-up/sign-up.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>Register</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class = "background" >\n  <h1 class = heading>Sign up</h1>\n  <ion-card>\n    <ion-list no-lines>\n      <ion-item>\n        <ion-label floating color = "dark">Full name</ion-label>\n        <ion-input type = "text" [(ngModel)]="user.name"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating color = "dark">Email</ion-label>\n        <ion-input type = "email" [(ngModel)]="user.email" (change)="emailChanged()"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating color = "dark">Password</ion-label>\n        <ion-input type = "password" [(ngModel)]="user.password"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating color = "dark">Confirm Password</ion-label>\n        <ion-input type = "password" [(ngModel)]="user.confirmPassword"></ion-input>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n  <ion-fab bottom right #fab>\n    <button ion-fab (click)="signUp()">\n      <ion-icon name = "arrow-dropright"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/chiri/Documents/meetfront/meet-and-play/meet-and-play/src/pages/sign-up/sign-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { Md5 } from 'ts-md5/dist/md5';


var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, storage, alertCtrl, http, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.events = events;
        this.user = {};
        this.sports = [];
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('id').then(function (data) { return _this.user.id = data; });
        this.storage.get('name').then(function (data) { return _this.user.name = data; });
        this.storage.get('email').then(function (data) { return _this.user.email = data; });
        this.storage.get('phone').then(function (data) { return _this.user.phone = data; });
        this.storage.get('favouriteSports').then(function (data) {
            console.log(data);
            var splitString = data.split("|");
            for (var i = 0; i < splitString.length; i++)
                _this.sports.push(splitString[i]);
            _this.user.favouriteSports = _this.sports;
        });
        this.storage.get('birthDate').then(function (data) { return _this.user.birthDate = data; });
        this.storage.get('photoUrl').then(function (data) {
            _this.user.photoUrl = ("https://www.gravatar.com/avatar/" + __WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5__["Md5"].hashStr(_this.user.email.toString()) + "?s=400");
        });
    };
    ProfilePage.prototype.emailChanged = function () {
        this.user.photoUrl = ("https://www.gravatar.com/avatar/" + __WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5__["Md5"].hashStr(this.user.email.toString()));
    };
    ProfilePage.prototype.save = function () {
        var _this = this;
        console.log(this.user.favouriteSports);
        this.storage.get('id').then(function (data) {
            var url = 'api/user/' + data;
            var parsedSports = "";
            if (_this.user.favouriteSports != null) {
                for (var i = 0; i < _this.user.favouriteSports.length; i++)
                    parsedSports += _this.user.favouriteSports[i] + '|';
            }
            var requestData = { 'phone': _this.user.phone, 'photoUrl': _this.user.photoUrl, 'birthDate': _this.user.birthDate, 'favouriteSports': parsedSports };
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.put(url, JSON.stringify(requestData), { headers: headers }).subscribe(function (response) {
                var alert = _this.alertCtrl.create({ message: 'You have updated your details successfully', buttons: ['Ok'] });
                alert.present();
                _this.storage.set('phone', _this.user.phone);
                _this.storage.set('favouriteSports', parsedSports);
                _this.storage.set('birthDate', _this.user.birthDate);
                _this.storage.set('photoUrl', _this.user.photoUrl);
            }, function (error) {
                console.log(error);
            });
        });
    };
    ProfilePage.prototype.logout = function () {
        this.events.publish('user:logout');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/home/chiri/Documents/meetfront/meet-and-play/meet-and-play/src/pages/profile/profile.html"*/'<ion-content class = "background" >\n  <h1 class = heading>My profile</h1>\n  <ion-card>\n    <!--<ion-card-header>\n      Statistics\n    </ion-card-header>-->\n    <ion-card-content>\n\n        <ion-grid>\n            <ion-row>\n              <ion-col col-4>\n                  <img [src] ="user.photoUrl" alt="Profile picture">\n                <!--<button ion-button color = "danger" block outline ion-button (click)="save()">Save Settings</button>-->\n              </ion-col>\n              <ion-col col-8>\n                  <p class="headerText">{{user.name}}</p>\n                  <p class="headerText">{{user.email}}</p>\n              </ion-col>\n            </ion-row>\n        </ion-grid>\n        <ion-item>\n            <ion-label stacked color = "dark">Phone number</ion-label>\n            <ion-input type = "tel" [(ngModel)]="user.phone"></ion-input>\n        </ion-item>\n        <ion-list>\n          <ion-item>\n            <ion-label stacked color = "dark">Preferred sports</ion-label>\n              <ion-select [(ngModel)]="user.favouriteSports" multiple="true" >\n                <ion-option value="Football" >Football</ion-option>\n                <ion-option value="Basketball">Basketball</ion-option>\n                <ion-option value="Boxing" >Boxing</ion-option>\n                <ion-option value="Tenis">Tenis</ion-option>\n                <ion-option value="NetBall">NetBall</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-list>\n        <ion-item>\n          <ion-label stacked color = "dark">Date of birth</ion-label>\n          <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="user.birthDate"></ion-datetime>\n        </ion-item>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <button ion-button (click)="logout()" color = "danger" block outline>Log out</button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n    </ion-card>\n\n\n    <ion-fab bottom right #fab>\n      <button ion-fab (click)="save()">\n        <ion-icon name="sync"></ion-icon>\n      </button>\n    </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/home/chiri/Documents/meetfront/meet-and-play/meet-and-play/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoinRoomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
            selector: 'page-join-room',template:/*ion-inline-start:"/home/chiri/Documents/meetfront/meet-and-play/meet-and-play/src/pages/join-room/join-room.html"*/'<!--\n  Generated template for the JoinRoomPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Back to Rooms</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class = "background" >\n    <h1 class = heading>Join room</h1>\n    <ion-card>\n      <ion-card-header>\n        Search for a room\n      </ion-card-header>\n      <ion-card-content>\n        <ion-list>\n            <ion-item>\n              <strong>Test_Content</strong>\n            </ion-item>\n          </ion-list>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <button ion-button (click)="CreateRoom()" color = "danger" block outline>Join Room</button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n    </ion-card>\n  </ion-content>\n\n'/*ion-inline-end:"/home/chiri/Documents/meetfront/meet-and-play/meet-and-play/src/pages/join-room/join-room.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], JoinRoomPage);
    return JoinRoomPage;
}());

//# sourceMappingURL=join-room.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rooms_rooms__ = __webpack_require__(57);
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
        //hard coded, should be id or name
        this.roomName = "aRoomName";
        this.messages = [];
        //below are variables used for hard coded data
        this.umair = "https://www.gravatar.com/avatar/" + "760edda6c248d22bb197bb31a7ac69e2" + "?s=300";
        this.akbar = "https://www.gravatar.com/avatar/" + "a5bc9bcd7030dea895f8d15d9581b7fd" + "?s=300";
        //below is hard coded data to be replaced by database values
        //https://www.gravatar.com/avatar/
        this.messages = [
            { url: this.umair, name: "Umair Tahir", content: "This is the first message" },
            { url: this.akbar, name: "Akbar Ramzan", content: "Wow that is a good message" },
            { url: this.umair, name: "Umair Tahir", content: "Bla bla bla" },
            { url: this.akbar, name: "Akbar Ramzan", content: "Very long bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla." },
            { url: this.umair, name: "Umair Tahir", content: "emoji test 1 😋" },
            { url: this.akbar, name: "Akbar Ramzan", content: "more 😀 😁 😂 😃 😄 😅 😆 " },
            { url: this.umair, name: "Umair Tahir", content: "Bla bla bla" },
            { url: this.umair, name: "Umair Tahir", content: "Bla bla bla" },
        ];
    }
    RoomChatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RoomChatPage');
        this.scrollToBottom();
    };
    RoomChatPage.prototype.back = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__rooms_rooms__["a" /* RoomsPage */]);
    };
    RoomChatPage.prototype.send = function () {
        //Below is send function hard coded
        //Change url to user.url and name to user.name
        console.log("Send key pressed");
        if ((this.newMessage != "") && (this.newMessage != null)) {
            this.messages.push({ url: "https://www.gravatar.com/avatar/default", name: "Admin", content: this.newMessage });
        }
        this.newMessage = "";
        this.scrollToBottom();
    };
    RoomChatPage.prototype.scrollToBottom = function () {
        //this.content.scollTo();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(scroll),
        __metadata("design:type", Object)
    ], RoomChatPage.prototype, "content", void 0);
    RoomChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-room-chat',template:/*ion-inline-start:"/home/chiri/Documents/meetfront/meet-and-play/meet-and-play/src/pages/room-chat/room-chat.html"*/'<ion-content class = "background" >\n  <h1 class = heading>Chat: {{roomName}}</h1>\n  <ion-card class = messaging>\n    <!--<ion-card-header>\n      Statistics\n    </ion-card-header>-->\n    <ion-card-content #scroll>\n      <ion-scroll scrollbar-y="true" scrollY="true" style="height:65vh">\n      <ion-list>\n          <ion-item *ngFor="let message of messages.slice().reverse()" text-wrap no-lines>\n              <!-- <strong></strong>-->\n              <div class = "user">\n                <img [src] ="message.url" alt="Profile picture">\n              </div>\n              <div class = "messageContent">{{message.content}}</div>\n              <div class = "name">{{message.name}}:</div>\n              \n              <!--<button ion-button large (click)="joinSuggestion(suggestion.id)" color = "danger" full> {{suggestion.info}} </button>-->\n          </ion-item>\n      </ion-list>\n    </ion-scroll>\n    </ion-card-content>\n  </ion-card>\n  <ion-card class = message>\n    <ion-card-content>\n        <ion-item>\n            <ion-label stacked color = "dark"></ion-label>\n            <ion-input type = "text" [(ngModel)]="newMessage" maxlength = "50"></ion-input>\n            <button ion-fab mini (click)="send()" item-right>\n              <ion-icon name="send"></ion-icon>\n            </button>\n        </ion-item>\n    </ion-card-content>\n  </ion-card>\n  <ion-fab bottom left #fab>\n    <button ion-fab (click)="back()">\n      <ion-icon name="arrow-back"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/chiri/Documents/meetfront/meet-and-play/meet-and-play/src/pages/room-chat/room-chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], RoomChatPage);
    return RoomChatPage;
}());

//# sourceMappingURL=room-chat.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotificationsPage = (function () {
    function NotificationsPage(navCtrl, navParams, alertCtrl, loadingCtrl, toastCtrl, http, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.storage = storage;
        this.notifications = [];
        //below are variables used for hard coded data
        this.umair = "https://www.gravatar.com/avatar/" + "760edda6c248d22bb197bb31a7ac69e2" + "?s=300";
        this.akbar = "https://www.gravatar.com/avatar/" + "a5bc9bcd7030dea895f8d15d9581b7fd" + "?s=300";
        this.getNotifications();
    }
    NotificationsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationsPage');
    };
    NotificationsPage.prototype.Accept = function (notification) {
        this.updateRequestStatus(notification.requestID, true);
        var index = this.notifications.indexOf(notification);
        if (index > -1) {
            this.notifications.splice(index, 1);
        }
        this.presentToast("Accepted request");
    };
    NotificationsPage.prototype.Reject = function (notification) {
        console.log(notification);
        this.updateRequestStatus(notification.requestID, false);
        var index = this.notifications.indexOf(notification);
        if (index > -1) {
            this.notifications.splice(index, 1);
        }
        this.presentToast("Rejected request");
    };
    NotificationsPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 1500,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    NotificationsPage.prototype.getNotifications = function () {
        var _this = this;
        this.storage.get('id').then(function (data) {
            var url = 'api/request/forUser/' + data;
            _this.http.get(url).subscribe(function (response) {
                _this.notifications = JSON.parse(response._body);
                console.log(response);
            }, function (error) {
                console.log(error);
            });
        });
    };
    NotificationsPage.prototype.updateRequestStatus = function (requestId, status) {
        var url = 'api/request/acceptRequest/' + requestId + '/' + status;
        this.http.post(url, {}, {}).subscribe(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
    };
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notifications',template:/*ion-inline-start:"/home/chiri/Documents/meetfront/meet-and-play/meet-and-play/src/pages/notifications/notifications.html"*/'<ion-content class = "background" >\n  <h1 class = heading>Notifications</h1>\n  <ion-card>\n    <ion-card-content #scroll>\n      <ion-scroll scrollbar-y="true" scrollY="true" style="height:87vh">\n      <ion-list>\n          <ion-item *ngFor="let notification of notifications" text-wrap no-lines>\n              <div class = "user">  <img [src] ="notification.user?.photoURL" alt="Profile picture">  </div>\n              <div class = "notifContent"> I would like to join your room!</div>\n\n              <div class = "name">{{notification.user?.name}}:\n                <button ion-button (click)="Accept(notification)" color = "balanced">Accept</button>\n                <button class ="Reject" ion-button (click)="Reject(notification)" color = "danger">Reject</button>\n              </div>\n            </ion-item>\n          <ion-item *ngIf="notifications==0" text-wrap no-lines>\n            <strong>\n              <h1>No notifications to show</h1>\n            </strong>\n          </ion-item>\n      </ion-list>\n    </ion-scroll>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n<!-- .slice().reverse() -->\n'/*ion-inline-end:"/home/chiri/Documents/meetfront/meet-and-play/meet-and-play/src/pages/notifications/notifications.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RoomPage = (function () {
    function RoomPage(navCtrl, navParams, http, storage, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.ball = '../../assets/imgs/basketball.png';
        this.users = [];
        this.roomId = navParams.get('id');
        this.sport = navParams.get('sport');
        this.time = new Date(navParams.get('time'));
        this.lat = navParams.get('lat');
        this.lng = navParams.get('lng');
    }
    RoomPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setTimeout(function () {
            _this.showMap();
            _this.getUsersInRoom();
        }, 300);
    };
    RoomPage.prototype.showMap = function () {
        var latLng = new google.maps.LatLng(this.lat, this.lng);
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: latLng
        });
    };
    RoomPage.prototype.getUsersInRoom = function () {
        var _this = this;
        var url = 'api/rooms/getMembers/' + this.roomId;
        this.http.get(url).subscribe(function (response) {
            _this.users = JSON.parse(response._body);
            console.log(_this.users);
        });
    };
    RoomPage.prototype.checkRequest = function () {
        var _this = this;
        this.storage.get('id').then(function (data) {
            var url = 'api/request/existingRequest/' + data + '/' + _this.roomId;
            _this.http.get(url).subscribe(function (response) {
                if (response._body == 'false') {
                    //setTimeout(() => {
                    _this.sendRequest(data);
                    //}, 300);
                }
                else {
                    var alert_1 = _this.alertCtrl.create({ 'message': 'Request already sent', buttons: ['Ok'] });
                    alert_1.present();
                }
            });
        });
    };
    RoomPage.prototype.sendRequest = function (data) {
        var _this = this;
        var requestData = { 'userID': data, 'roomID': this.roomId };
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        this.http.post('api/request', JSON.stringify(requestData), { headers: headers }).subscribe(function (response) {
            console.log(response);
            var alert = _this.alertCtrl.create({ 'message': 'Request sent successfully', buttons: ['Ok'] });
            alert.present();
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], RoomPage.prototype, "mapElement", void 0);
    RoomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-room',template:/*ion-inline-start:"/home/chiri/Documents/meetfront/meet-and-play/meet-and-play/src/pages/room/room.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Room page</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class = "background" >\n  <h1 class = heading>Room page</h1>\n  <ion-card>\n    <ion-card-content>\n        <ion-grid>\n            <ion-row>\n              <ion-col col-4>\n                  <img [src] ="ball" alt="Sport picture">\n                <!--<button ion-button color = "danger" block outline ion-button (click)="save()">Save Settings</button>-->\n              </ion-col>\n              <ion-col col-8>\n                  <p class="headerText">{{sport}}</p>\n                  <p class="headerText">{{time | date:\'dd/MM/yyyy h:mm:ss\'}}</p>\n              </ion-col>\n            </ion-row>\n        </ion-grid>\n        <p class="headerText"> Users in this room </p>\n        <ion-scroll scrollbar-y="true" scrollY="true" style="height:230px;">\n          <ion-list>\n            <ion-item *ngFor="let user of users" text-wrap no-lines>\n                <div class = "user">\n                  <img [src] ="user.photoURL" alt="Profile picture" class="userimg">\n                </div>\n                <div class = "name"><p class="userText">{{user.name}}</p></div>\n            </ion-item>\n          </ion-list>\n        </ion-scroll>\n        <p class="headerText"> Location </p>\n        <div #map id="map" style="height:200px;"></div>\n\n      </ion-card-content>\n    </ion-card>\n\n\n    <ion-fab bottom right #fab>\n      <button ion-fab (click)="checkRequest()">\n        <ion-icon name="send"></ion-icon>\n      </button>\n    </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/home/chiri/Documents/meetfront/meet-and-play/meet-and-play/src/pages/room/room.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RoomPage);
    return RoomPage;
}());

//# sourceMappingURL=room.js.map

/***/ }),

/***/ 127:
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
webpackEmptyAsyncContext.id = 127;

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/additional-info/additional-info.module": [
		308,
		10
	],
	"../pages/create-room/create-room.module": [
		309,
		9
	],
	"../pages/join-room/join-room.module": [
		310,
		8
	],
	"../pages/login/login.module": [
		311,
		7
	],
	"../pages/notifications/notifications.module": [
		312,
		6
	],
	"../pages/profile/profile.module": [
		313,
		5
	],
	"../pages/room-chat/room-chat.module": [
		314,
		4
	],
	"../pages/room-information/room-information.module": [
		315,
		3
	],
	"../pages/room/room.module": [
		316,
		2
	],
	"../pages/rooms/rooms.module": [
		317,
		1
	],
	"../pages/sign-up/sign-up.module": [
		318,
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
webpackAsyncContext.id = 168;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(16);
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
    function HomePage(navCtrl, http, events) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.events = events;
        this.user = {};
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setTimeout(function () {
            _this.showMap();
            _this.getRoomsLocations();
        }, 300);
    };
    HomePage.prototype.showMap = function () {
        var latLng = new google.maps.LatLng(53.4808, -2.2426);
        var mapOptions = {
            center: latLng,
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    };
    HomePage.prototype.addMarker = function (location, roomID, sport, time, lat, long) {
        var _this = this;
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: location
        });
        google.maps.event.addListener(marker, 'click', function () {
            _this.events.publish('user:roomPage', roomID, sport, time, lat, long);
        });
    };
    HomePage.prototype.addInfoWindow = function (marker, content) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    HomePage.prototype.getRoomsLocations = function () {
        var _this = this;
        // this.http.get('api/account/info').subscribe(response => console.log(response));
        this.http.get('api/rooms')
            .subscribe(function (response) {
            if (response.status == 200) {
                _this.placeMarkers(JSON.parse(response._body));
            }
        }, function (error) {
            console.log(error.status);
        });
    };
    HomePage.prototype.placeMarkers = function (locations) {
        for (var i = 0; i < locations.length; i++) {
            var latLng = new google.maps.LatLng(locations[i].venueLat, locations[i].venueLong);
            this.addMarker(latLng, locations[i].roomID, locations[i].sport, locations[i].time, locations[i].venueLat, locations[i].venueLong);
        }
    };
    HomePage.prototype.createRoom = function () {
        this.events.publish('user:createRoom');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "mapElement", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/chiri/Documents/meetfront/meet-and-play/meet-and-play/src/pages/home/home.html"*/'<ion-content>\n  <div #map id="map"></div>\n  <ion-fab bottom left #fab>\n    <button ion-fab (click)="createRoom()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/chiri/Documents/meetfront/meet-and-play/meet-and-play/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomInformationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
            selector: 'page-room-information',template:/*ion-inline-start:"/home/chiri/Documents/meetfront/meet-and-play/meet-and-play/src/pages/room-information/room-information.html"*/'<!--\n  Generated template for the RoomInformationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Room information</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/chiri/Documents/meetfront/meet-and-play/meet-and-play/src/pages/room-information/room-information.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], RoomInformationPage);
    return RoomInformationPage;
}());

//# sourceMappingURL=room-information.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(237);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_create_room_create_room__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_join_room_join_room__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_room_chat_room_chat__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_room_information_room_information__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_rooms_rooms__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_sign_up_sign_up__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_additional_info_additional_info__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_notifications_notifications__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_room_room__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_maps_maps__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_file_transfer__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_file__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_camera__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_storage__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























//Profile picture




//Md5 checksum
//import { Md5 } from 'ts-md5/dist/md5';
//import { Md5 } from 'ts-md5/dist/md5';
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
                __WEBPACK_IMPORTED_MODULE_16__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_additional_info_additional_info__["a" /* AdditionalInfoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_room_room__["a" /* RoomPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/additional-info/additional-info.module#AdditionalInfoPageModule', name: 'AdditionalInfoPage', segment: 'additional-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-room/create-room.module#CreateRoomPageModule', name: 'CreateRoomPage', segment: 'create-room', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/join-room/join-room.module#JoinRoomPageModule', name: 'JoinRoomPage', segment: 'join-room', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule', name: 'NotificationsPage', segment: 'notifications', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/room-chat/room-chat.module#RoomChatPageModule', name: 'RoomChatPage', segment: 'room-chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/room-information/room-information.module#RoomInformationPageModule', name: 'RoomInformationPage', segment: 'room-information', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/room/room.module#RoomPageModule', name: 'RoomPage', segment: 'room', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rooms/rooms.module#RoomsPageModule', name: 'RoomsPage', segment: 'rooms', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
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
                __WEBPACK_IMPORTED_MODULE_16__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_additional_info_additional_info__["a" /* AdditionalInfoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_room_room__["a" /* RoomPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_22__providers_maps_maps__["a" /* MapsProvider */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_file_transfer__["b" /* FileTransferObject */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(51);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/chiri/Documents/meetfront/meet-and-play/meet-and-play/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/chiri/Documents/meetfront/meet-and-play/meet-and-play/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
            selector: 'page-about',template:/*ion-inline-start:"/home/chiri/Documents/meetfront/meet-and-play/meet-and-play/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/chiri/Documents/meetfront/meet-and-play/meet-and-play/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
            selector: 'page-contact',template:/*ion-inline-start:"/home/chiri/Documents/meetfront/meet-and-play/meet-and-play/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/chiri/Documents/meetfront/meet-and-play/meet-and-play/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(301);
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

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_room_create_room__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rooms_rooms__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__notifications_notifications__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__room_room__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(23);
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
    function TabsPage(navCtrl, storage, events, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.events = events;
        this.http = http;
        this.tab1 = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_5__rooms_rooms__["a" /* RoomsPage */];
        this.tab3 = __WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */];
        this.tab4 = __WEBPACK_IMPORTED_MODULE_6__notifications_notifications__["a" /* NotificationsPage */];
        setTimeout(function () {
            _this.storage.get('id').then(function (data) {
                if (data == null)
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
            });
        }, 200);
        events.subscribe('user:logout', function () {
            _this.logout();
        });
        events.subscribe('user:createRoom', function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__create_room_create_room__["a" /* CreateRoomPage */]);
        });
        events.subscribe('user:roomPage', function (roomID, sport, time, lat, lng) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__room_room__["a" /* RoomPage */], { id: roomID, sport: sport, time: time, lat: lat, lng: lng });
        });
    }
    TabsPage.prototype.ionViewDidEnter = function () {
        this.primaryTabs.select(0);
        //this.primaryTabs. setColor();
    };
    TabsPage.prototype.logout = function () {
        this.storage.remove('id');
        this.storage.remove('email');
        this.storage.remove('name');
        this.storage.remove('favouriteSports');
        this.storage.remove('phone');
        this.storage.remove('photoUrl');
        this.http.post('api/account/logout', {}, {}).subscribe(function (response) { console.log(response); }, function (error) { });
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('primaryTabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["l" /* Tabs */])
    ], TabsPage.prototype, "primaryTabs", void 0);
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/chiri/Documents/meetfront/meet-and-play/meet-and-play/src/pages/tabs/tabs.html"*/'<ion-icon name="tab-home"></ion-icon>\n<ion-tabs name="primaryTabs" tabsLayout="icon-top" tabsPlacement="bottom" #primaryTabs>\n  <ion-tab [root]="tab1" tabTitle="Home" tabIcon="basketball"></ion-tab>\n  <ion-tab [root]="tab2" tabTitle="Rooms" tabIcon="mail" icon-on="home" icon-off="home"></ion-tab>\n  <ion-tab [root]="tab3" tabTitle="Profile" tabIcon="notifications"></ion-tab>\n  <ion-tab [root]="tab4" tabTitle="Notifications" tabIcon="person"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/chiri/Documents/meetfront/meet-and-play/meet-and-play/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateRoomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateRoomPage = (function () {
    function CreateRoomPage(navCtrl, navParams, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        /**
       * Set Date and Time to default value in he date/time picker
       */
        this.dateOfEvent = new Date().toISOString();
    }
    CreateRoomPage.prototype.ionViewDidLoad = function () {
        this.showMap();
    };
    CreateRoomPage.prototype.showMap = function () {
        var _this = this;
        var latLng = new google.maps.LatLng(53.4808, -2.2426);
        var mapOptions = {
            center: latLng,
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        google.maps.event.addListener(this.map, 'click', function (location) {
            _this.lat = location.latLng.lat();
            _this.lng = location.latLng.lng();
            var latLng = new google.maps.LatLng(_this.lat, _this.lng);
            _this.addMarker(latLng, _this.mapElement.nativeElement, mapOptions);
        });
    };
    CreateRoomPage.prototype.addMarker = function (location, nativeElement, mapOptions) {
        if (this.marker != null)
            this.marker.setMap(null);
        this.marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: location
        });
    };
    CreateRoomPage.prototype.createRoom = function () {
        var _this = this;
        var data = { 'sport': this.sport, 'time': this.dateOfEvent, 'venueLat': this.lat, "venueLong": this.lng };
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        this.http.post('api/rooms', JSON.stringify(data), { headers: headers })
            .subscribe(function (response) {
            if (response.status == 200) {
                var alert_1 = _this.alertCtrl.create({
                    message: 'Your room has been successfully created',
                    buttons: [{ text: 'Ok', handler: function () { _this.navCtrl.pop(); } }]
                });
                alert_1.present();
            }
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], CreateRoomPage.prototype, "mapElement", void 0);
    CreateRoomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-room',template:/*ion-inline-start:"/home/chiri/Documents/meetfront/meet-and-play/meet-and-play/src/pages/create-room/create-room.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>Create room</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content class = "background" >\n    <ion-card>\n      <ion-card-content>\n          <ion-list no-lines>\n              <ion-item>\n                  <ion-label stacked color = "dark">Sport</ion-label>\n                  <ion-select [(ngModel)]="sport" multiple="false">\n                  <ion-option value="Football" >Football</ion-option>\n                  <ion-option value="Basketball">Basketball</ion-option>\n                  <ion-option value="Boxing" >Boxing</ion-option>\n                  <ion-option value="Tenis">Tennis</ion-option>\n                  <ion-option value="Netball">Netball</ion-option>\n                </ion-select>\n              </ion-item>\n\n              <ion-item>\n                <ion-label floating color = "dark">Time</ion-label>\n                <ion-datetime displayFormat="DD MMM, YYYY hh:mm A" pickerFormat="DD MMM, YYYY hh:mm A" [(ngModel)]="dateOfEvent"></ion-datetime>\n              </ion-item>\n\n\n            <ion-item>\n              <p> Choose location </p>\n            </ion-item>\n          </ion-list>\n\n          <div #map id="map" style="height:400px;"></div>\n\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <button ion-button (click)="createRoom()" color = "danger" block outline>Create Room</button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n    </ion-card>\n  </ion-content>\n'/*ion-inline-end:"/home/chiri/Documents/meetfront/meet-and-play/meet-and-play/src/pages/create-room/create-room.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CreateRoomPage);
    return CreateRoomPage;
}());

//# sourceMappingURL=create-room.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__join_room_join_room__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_room_create_room__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__room_chat_room_chat__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(16);
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






var RoomsPage = (function () {
    function RoomsPage(popoverCtrl, navCtrl, navParams, alertCtrl, storage, http) {
        this.popoverCtrl = popoverCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.http = http;
        //Variable to hold suggestion to put in html
        this.suggestion = "test";
        this.suggestions = "test2";
        this.rooms = [];
        this.url = '../../assets/imgs/basketball.png';
        this.getRooms();
        this.suggestions = [
            { id: 1, info: "Kickboxing, Sudden center" },
            { id: 2, info: "Football, Falinge Park" },
            { id: 3, info: "Basketball, Spotland Rd." },
            { id: 4, info: "Football, some place" },
            { id: 5, info: "Boxing, Hamer" },
            { id: 6, info: "Tenis, Springfield Park" },
            { id: 7, info: "Netball, some place" },
        ];
    }
    RoomsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RoomsPage');
        //Room ID for the button and name for information
        for (var i = 0; i < this.suggestions.length; i++) {
            var suggestion = this.suggestions[i];
        }
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
    RoomsPage.prototype.joinSuggestion = function (id) {
        var alert = this.alertCtrl.create({
            title: 'Join room with ID: ' + id + "?",
            message: 'Are you sure you want to join this room?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('No clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Yes clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    RoomsPage.prototype.chat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__room_chat_room_chat__["a" /* RoomChatPage */]);
    };
    RoomsPage.prototype.getRooms = function () {
        var _this = this;
        this.storage.get('id').then(function (data) {
            var url = 'api/user/userRooms/' + data;
            _this.http.get(url).subscribe(function (response) {
                _this.rooms = JSON.parse(response._body);
                console.log(_this.rooms);
            }, function (error) {
                console.log(error);
            });
        });
    };
    RoomsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rooms',template:/*ion-inline-start:"/home/chiri/Documents/meetfront/meet-and-play/meet-and-play/src/pages/rooms/rooms.html"*/'<ion-content class = "background" >\n    <h1 class = heading>Rooms</h1>\n    <ion-card>\n      <ion-card-content>\n\n        <ion-scroll scrollbar-y="true" scrollY="true" style="height:600px;">\n          <ion-list no-lines>\n              <ion-item *ngFor="let room of rooms">\n                <div class = "user">  <img [src] ="url" alt="Room picture" class="userimg">  </div>\n                <div class = "name"> {{room.sport}}</div>\n\n                <div class = "notifContent">{{ room.time | date:\'dd/MM/yyyy h:mm\' }}:</div>\n                </ion-item>\n          </ion-list>\n        </ion-scroll>\n\n\n\n      </ion-card-content>\n    </ion-card>\n    <ion-fab bottom right #fab>\n        <button ion-fab (click)="chat()">\n          <ion-icon name="chatbubbles"></ion-icon>\n        </button>\n      </ion-fab>\n  </ion-content>\n'/*ion-inline-end:"/home/chiri/Documents/meetfront/meet-and-play/meet-and-play/src/pages/rooms/rooms.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */]])
    ], RoomsPage);
    return RoomsPage;
}());

//# sourceMappingURL=rooms.js.map

/***/ })

},[215]);
//# sourceMappingURL=main.js.map