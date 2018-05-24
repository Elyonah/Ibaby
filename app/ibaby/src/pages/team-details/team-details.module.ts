import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamDetailsPage } from './team-details';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    TeamDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(TeamDetailsPage),
    TranslateModule.forChild()
  ],
})
export class TeamDetailsPageModule {}
