import { Component } from '@angular/core';
import {IonicPage, NavController } from 'ionic-angular';
import { FakeUserProvider } from '../../providers/fake-user/fake-user';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  items: any;
  token: any;
  constructor(public navCtrl: NavController, public fakeUserProvider:FakeUserProvider) {
  }

  ionViewDidLoad() {
    this.fakeUserProvider.findTenLastUser().subscribe(
        (results:any) => {
          this.items = results
        },
        (error) => {
          console.error(error.message + '('+ error.code +')')
        }
    )
  }

  userSelected(item:any){
      this.navCtrl.push('UserDetailsPage', {currentUser: item})
  }
}
