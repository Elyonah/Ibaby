import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import SailsSocket from 'sails-socket'

/**
 * Generated class for the BabyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-baby',
  templateUrl: 'baby.html',
})
export class BabyPage {
  items: any;
  showOnlyAvailables: false;
  constructor(public navCtrl: NavController) {

  }


  ionViewDidLoad() {
      const _this = this;

      SailsSocket.get('/babyfoot').then(function(res){
          _this.items = res.body
      }).catch(function(res){
          console.log(res);
      });

      SailsSocket.on('babyfoot', function(msg){
          /*console.log(msg);
          var item = document.getElementById(msg.data.id);
          console.log(item)
          item.classList.add("available");*/
      })
  };
  update($event) {
    this.showOnlyAvailables = $event.checked
  };
  babySelected(item:any){
    this.navCtrl.push('BabyDetailsPage', {currentBaby: item})
  }
}
