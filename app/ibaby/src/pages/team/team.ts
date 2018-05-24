import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FakeTeamProvider } from '../../providers/fake-team/fake-team';

/**
 * Generated class for the TeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-team',
  templateUrl: 'team.html',
})
export class TeamPage {

  items:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,  public fakeTeamProvider:FakeTeamProvider) {
  }

  ionViewDidLoad() {
    this.fakeTeamProvider.findTenLastTeam().subscribe(
        (results:any) => {
            this.items = results
        },
        (error) => {
            console.error(error.message + '('+ error.code +')')
        }
    )
  }
  itemSelected(item:any){
    this.navCtrl.push('TeamDetailsPage', {currentTeam: item})
  }

}
