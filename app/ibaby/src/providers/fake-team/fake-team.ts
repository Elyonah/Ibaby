import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../api/api';

/*
  Generated class for the FakeTeamProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FakeTeamProvider {

  constructor(public http: HttpClient, public apiProvider: Api) {
    console.log('Hello FakeTeamProvider Provider');
  }

    findTenLastTeam(){
        return this.apiProvider.get('team');
    }

    getTeamInfo(id){
        return this.apiProvider.get('team/'+id);
    }
}
