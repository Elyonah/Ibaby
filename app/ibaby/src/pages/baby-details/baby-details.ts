import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ModalController, AlertController, ToastController} from 'ionic-angular';
import {FakeBookingProvider} from "../../providers/fake-booking/fake-booking";
import {Storage} from "@ionic/storage";
import {FakeUserProvider} from "../../providers/fake-user/fake-user";
import {FakeMatchProvider} from "../../providers/fake-match/fake-match";
import {FakeBabyProvider} from "../../providers/fake-baby/fake-baby";

@IonicPage()
@Component({
    selector: 'page-baby-details',
    templateUrl: 'baby-details.html',
})
export class BabyDetailsPage {
    baby: any = {};
    currentUser: any;
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public modalCtrl: ModalController,
                public alertCtrl: AlertController,
                public toastCtrl: ToastController,
                public fakeBookingProvider: FakeBookingProvider,
                public fakeUserProvider: FakeUserProvider,
                public fakeBabyProvider: FakeBabyProvider,
                public fakeMatchProvider: FakeMatchProvider,
                public storage: Storage) {
        this.baby = navParams.get('currentBaby');
        this.storage.get('user').then((res) => {
            if(res.id !== ''){
                this.currentUser = res;
            }else{
                console.error('No user found !');
            }
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad BabyDetailsPage');
    }

    Book(item) {
        let _status = this;
        console.log('i want to book this item');

        let bookFormModal = this.modalCtrl.create('BookFormModalPage');
        bookFormModal.present();
        bookFormModal.onDidDismiss(data=>{
            console.log("Data =>", data);
            if(new Date(data['date']) <= new Date()){
                this.ErrorAlert(_status)
            }else{
                let entries = [];
                entries['owner'] = parseInt(this.currentUser.id);
                entries['hour'] = parseInt(data['hour']);
                entries['babyfoot'] = parseInt(this.baby.id);
                entries['players'] = parseInt(data['number']);
                let myDate=data['date'].split("-");
                let newDate=myDate[1]+"/"+myDate[2]+"/"+myDate[0];
                entries['date'] = new Date(newDate).getTime();

                this.fakeBookingProvider.addBooking(entries).subscribe((resp) => {

                    }, (err) => {
                    // Unable to add booking
                    let toast = this.toastCtrl.create({
                        message: 'Oops, something went wrong',
                        duration: 3000,
                        position: 'top'
                    });
                    toast.present();
                });
            }
        })
    }

    StartMatch(item){
        console.log("starting match");
        let alert = this.alertCtrl.create();
        alert.setTitle('Select players');
        this.fakeUserProvider.findTenLastUser().subscribe(
            (results:any) => {
                for(let i=0; i < results.length; i++){
                    let name = results[i].firstname + ' ' + results[i].lastname;
                    if(results[i].id !== this.currentUser.id){
                        alert.addInput({
                            type: 'checkbox',
                            value: results[i].id.toString(),
                            label: name,
                            checked: false
                        });
                    }
                }
            },
            (error) => {
                console.error(error.message + '('+ error.code +')')
            }
        );

        alert.addInput({
            type: 'checkbox',
            label: this.currentUser.firstname + ' ' + this.currentUser.lastname,
            value: this.currentUser.id,
            checked: true,
            disabled: true
        });


        alert.addButton('Cancel');
        alert.addButton({
            text: 'OK',
            handler: data => {
                this.fakeMatchProvider.startMatch(this.baby.id).subscribe((resp) => {
                    this.fakeBabyProvider.changeAvailableState(this.baby.id, false).subscribe((response) => {
                        this.navCtrl.push('MatchDetailsPage', {currentBaby: this.baby, players: data, currentMatch: resp})
                    }, (err) => {
                        let toast = this.toastCtrl.create({
                            message: 'Oops, something went wrong',
                            duration: 3000,
                            position: 'top'
                        });
                        toast.present();
                    });

                }, (err) => {
                    // Unable to add booking
                    let toast = this.toastCtrl.create({
                        message: 'Oops, something went wrong',
                        duration: 3000,
                        position: 'top'
                    });
                    toast.present();
                });

            }
        });
        alert.present();
    }


    ErrorAlert(status) {
        let errorAlert = status.alertCtrl.create({
            title: 'Error',
            subTitle: 'You can\'t book a babyfoot for a past day !',
            buttons: ['Dismiss']
        });
        errorAlert.present();
    }
}
