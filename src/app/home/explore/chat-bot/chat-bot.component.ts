import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';

import { ChatThreadComponent } from '../chat-thread/chat-thread.component';

register()

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss'],
  standalone:true,
  imports:[IonicModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA ]
})
export class ChatBotComponent  implements OnInit {
  component = ChatThreadComponent
  constructor() { }

  ngOnInit() {}

}
