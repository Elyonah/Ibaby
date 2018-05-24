import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from '../api/api';

/*
  Generated class for the FakeBookingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FakeBookingProvider {

  constructor(public http: HttpClient, public api: Api) {
    console.log('Hello FakeBookingProvider Provider');
  }

    addBooking(entries){
        console.log("here :", entries);
        let seq = this.api.post('api/bookings/addBooking', entries).share();

        seq.subscribe((resp: any) => {
            console.log(resp);
        }, err => {
            console.error('ERROR', err);
        });

        return seq;
    }

}
