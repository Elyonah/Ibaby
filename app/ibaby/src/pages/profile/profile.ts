import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import {FakeUserProvider} from '../../providers/fake-user/fake-user';
import {Storage} from "@ionic/storage";
import {FakeTeamProvider} from "../../providers/fake-team/fake-team";
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

    user: any = {};
    team: any = {};

    constructor(public navParams: NavParams,
                public fakeUserProvider: FakeUserProvider,
                public fakeTeamProvider: FakeTeamProvider,
                public storage: Storage) {
        let current = this;
        this.storage.get('user').then((res) => {
            this.getUserInfos(res.id, current);
        });
    }

    getUserInfos(id, state){
        if(id !== ''){
            state.fakeUserProvider.getUserInfo(id).subscribe(
                (user: any) => {
                    state.user = user;
                    if(this.user.team !== null){
                        this.getTeamInfos(state);
                    }
                },
                (error) => {
                    console.error(error.message + '(' + error.code + ')')
                });
        }else{
            console.error('No user found !');
        }
    }

    getTeamInfos(state){
        state.fakeTeamProvider.getTeamInfo(state.user.team.id).subscribe(
            (team: any) => {
                state.team = team;
            },
            (error) => {
                console.error(error.message + '(' + error.code + ')')
            }
        )
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
