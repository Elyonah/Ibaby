import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MatchDetailsPage } from './match-details';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    MatchDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(MatchDetailsPage),
    TranslateModule.forChild()
  ],
})
export class MatchDetailsPageModule {}
