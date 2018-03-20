import { Injectable } from '@angular/core';
import { User } from '../../models/User';

@Injectable()
export class GlobalUser {

  constructor(public givenID: string, public givenEmail: string, public givenName: string) {
  }

  setGlobalUser(user: User) {
    this.setGlobalUser = user;
  }

  getGlobalUser() {
    return this.globalUser;
  }

}
