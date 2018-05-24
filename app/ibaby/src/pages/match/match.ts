import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FakeMatchProvider} from "../../providers/fake-match/fake-match";

/**
 * Generated class for the MatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-match',
  templateUrl: 'match.html',
})
export class MatchPage {

  items: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public fakeMatchProvider: FakeMatchProvider) {
  }

    ionViewDidLoad() {
        this.fakeMatchProvider.findTenLastMatch().subscribe(
            (results:any) => {
                this.items = results
            },
            (error) => {
                console.error(error.message + '('+ error.code +')')
            }
        )
    }
    itemSelected(item:any){
        this.navCtrl.push('MatchDetailsPage', {currentMatch: item})
    }

}
