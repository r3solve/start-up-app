import { Component, OnInit } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

import { ListJournalComponent } from './list-journal/list-journal.component'


@Component({
  selector: 'app-journal',
  templateUrl: './journal.page.html',
  styleUrls: ['./journal.page.scss'],
})
export class JournalPage implements OnInit {
  component = ListJournalComponent

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
