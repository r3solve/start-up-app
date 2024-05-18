import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-new-journal',
  templateUrl: './new-journal.page.html',
  styleUrls: ['./new-journal.page.scss'],
})
export class NewJournalPage implements OnInit {
  component = ''
  constructor() { }

  ngOnInit() {
  }

}
