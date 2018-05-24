import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Api} from '../api/api';

/*
  Generated class for the FakeMatchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FakeMatchProvider {

  constructor(public http: HttpClient, public api: Api) {
    console.log('Hello FakeMatchProvider Provider');
  }

    findTenLastMatch(){
        return this.api.get('match', {isInProgress: true});
    }

    startMatch(babyID){
        let seq = this.api.post('api/matches/addMatch', {babyfoot: babyID}).share();

        seq.subscribe((resp: any) => {
            console.log("startMatchProvider", resp);
        }, err => {
            console.error('ERROR', err);
        });
        return seq;
    }

    finishMatch(matchID){
        return this.api.patch('match/'+matchID+'/?isInProgress=false&isPlayed=true&duration=60', null);
    }

    addMatchPlayers(color, playerID, matchID){
        return this.api.post('usermatch/', {color: color, user: playerID, match: matchID})
    }

}
