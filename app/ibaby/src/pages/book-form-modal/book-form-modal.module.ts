import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookFormModalPage } from './book-form-modal';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    BookFormModalPage,
  ],
  imports: [
    IonicPageModule.forChild(BookFormModalPage),
    TranslateModule.forChild()
  ],
})
export class BookFormModalPageModule {}
