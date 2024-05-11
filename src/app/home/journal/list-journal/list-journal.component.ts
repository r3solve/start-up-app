import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { IonInfiniteScroll } from '@ionic/angular';

import { AddEntryComponent } from '../add-entry/add-entry.component'



@Component({
  selector: 'app-list-journal',
  templateUrl: './list-journal.component.html',
  styleUrls: ['./list-journal.component.scss'],
  standalone:true,
  imports: [IonicModule, CommonModule]
})
export class ListJournalComponent  implements OnInit {
  component = AddEntryComponent
  constructor() { }
  items:any[] = [];

  ngOnInit() {
    this.generateItems();
  }

  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 50; i++) {
      this.items.push(`Item ${count + i}`);
    }
  }

  onIonInfinite(ev: any) {
    this.generateItems();
    setTimeout(() => {
      (ev.target as IonInfiniteScroll).complete();
    }, 500);
  }


}
