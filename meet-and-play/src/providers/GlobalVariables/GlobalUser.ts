import { Injectable } from '@angular/core';
import { User } from '../../models/User';

@Injectable()
export class GlobalUser {

  constructor() {
    this.globalUser = {} as User;
  }

  setGlobalUser(user) {
    this.setGlobalUser = user;
  }

  getGlobalUser() {
    return this.globalUser;
  }

}
