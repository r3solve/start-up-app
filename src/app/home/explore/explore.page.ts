import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';

import { ChatBotComponent } from './chat-bot/chat-bot.component'

register();

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {
  component = ChatBotComponent;
  constructor() { }

  ngOnInit() {
  }

}
