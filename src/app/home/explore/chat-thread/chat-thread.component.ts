import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

register()


@Component({
  selector: 'app-chat-thread',
  templateUrl: './chat-thread.component.html',
  styleUrls: ['./chat-thread.component.scss'],
   standalone:true,
  imports:[IonicModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA ]
})
export class ChatThreadComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
