import { Injectable } from '@angular/core';
import { Api } from '../api/api';
import { Storage } from "@ionic/storage";

/*
  Generated class for the FakeUserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FakeUserProvider {
  _user: any;
  constructor(public api:Api, public storage:Storage) {
    console.log('Hello FakeUserProvider Provider');
  }

  findTenLastUser(){
    return this.api.get('user');
  }

  getUserInfo(id){
    return this.api.get('user/'+id);
  }
}
