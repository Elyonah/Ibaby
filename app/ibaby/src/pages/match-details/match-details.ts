import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FakeMatchProvider} from "../../providers/fake-match/fake-match";

/**
 * Generated class for the MatchDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-match-details',
    templateUrl: 'match-details.html',
})
export class MatchDetailsPage {

    currentBaby: any;
    currentMatch: any;
    players: any;
    blueScore: any;
    redScore: any;
    inProgress: any;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public fakeMatchProvider: FakeMatchProvider) {
        this.currentBaby = navParams.get('currentBaby');
        this.currentMatch = navParams.get('currentMatch');
        this.players = navParams.get('players');
        this.blueScore = this.currentMatch.blueScore;
        this.redScore = this.currentMatch.redScore;
        this.inProgress = this.currentMatch.isInProgress;
        console.log(this.players);
      
      
        //L'ajout ci-dessous dans UserMatch devrait se faire avant d'arriver sur la page, mais je me suis un peu perdue dans le code.
        //Elle fait buguer l'application quand on revient sur la page de détail d'un match
        for (let i = 0; i < this.players.length; i++) {
            let color = [
                "blue",
                "red"
            ];
            if (this.players.length > 2) {
                color = [
                    "blue",
                    "blue",
                    "red",
                    "red"
                ];
            }

            this.fakeMatchProvider.addMatchPlayers(color[i], this.players[i], this.currentMatch.id).subscribe((res) => {
            }, (err) => {
                console.error(err)
            });
        }
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad MatchDetailsPage');
    }

}
