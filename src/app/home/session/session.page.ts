import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';


register();

@Component({
  selector: 'app-session',
  templateUrl: './session.page.html',
  styleUrls: ['./session.page.scss'],

})
export class SessionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
