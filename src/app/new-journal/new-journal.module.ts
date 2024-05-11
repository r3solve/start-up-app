import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewJournalPageRoutingModule } from './new-journal-routing.module';

import { NewJournalPage } from './new-journal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewJournalPageRoutingModule
  ],
  declarations: [NewJournalPage]
})
export class NewJournalPageModule {}
