import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {BabyDetailsPage} from './baby-details';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    BabyDetailsPage
  ],
  imports: [
    IonicPageModule.forChild(BabyDetailsPage),
    TranslateModule.forChild()
  ]
})
export class BabyDetailsPageModule {}
