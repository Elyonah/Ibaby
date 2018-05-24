import { Injectable } from '@angular/core';
import { Api } from '../api/api';

/*
  Generated class for the FakeBabyProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FakeBabyProvider {

  constructor(public api:Api) {
    console.log('Hello FakeBabyProvider Provider');
  }

    findTenLastBabyfoots(){
        return this.api.get('babyfoot');
    }

    changeAvailableState(baby, state){
        return this.api.patch('babyfoot/'+baby+'/?available='+state, null);
    }

}
