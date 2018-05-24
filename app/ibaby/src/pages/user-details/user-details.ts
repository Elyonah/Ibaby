import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the UserDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html',
})
export class UserDetailsPage {
  user:any = {};
  constructor(public navParams: NavParams,
              public storage:Storage) {
    this.user = navParams.get('currentUser');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDetailsPage');
  }
}
