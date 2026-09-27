import { Component } from '@angular/core';
import { Greeting } from './greeting/greeting';
import { Card } from './card/card';
import { MultiSlotComp } from './multi-slot-comp/multi-slot-comp';

@Component({
  imports: [Greeting, Card, MultiSlotComp],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  name = 'world';
  likeCount = 0;
  onLiked() {
    this.likeCount = this.likeCount + 1;
  }
}
