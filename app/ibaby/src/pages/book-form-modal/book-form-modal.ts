import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the BookFormModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book-form-modal',
  templateUrl: 'book-form-modal.html',
})
export class BookFormModalPage {

    public form = {
        date: "",
        hour: "",
        number: "2"
    };

    constructor(public viewCtrl: ViewController,
                public navCtrl: NavController,
                public navParams: NavParams) {}

    CloseModal() {
        this.viewCtrl.dismiss(this.form);
    }

}
