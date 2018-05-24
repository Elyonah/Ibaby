import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserDetailsPage } from './user-details';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    UserDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(UserDetailsPage),
    TranslateModule.forChild()
  ],
})
export class UserDetailsPageModule {}
