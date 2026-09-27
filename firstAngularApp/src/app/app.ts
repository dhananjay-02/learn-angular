import { Component } from '@angular/core';
import { Greeting } from './greeting/greeting';

@Component({
  imports: [Greeting],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  name = 'world';
  likeCount = 0;
  onLiked(){
    this.likeCount = this.likeCount+1;
  }
}
