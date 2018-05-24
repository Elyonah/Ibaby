import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TeamDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-team-details',
  templateUrl: 'team-details.html',
})
export class TeamDetailsPage {
  team:any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.team = navParams.get('currentTeam');
      console.log(this.team)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamDetailsPage');
  }

}
