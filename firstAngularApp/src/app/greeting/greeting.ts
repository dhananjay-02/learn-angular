import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-greeting',
  styleUrl: './greeting.scss',
  templateUrl: './greeting.html',
})
export class Greeting {
  greeting = 'Good morning';
  @Input() name = '';
  @Output() like = new EventEmitter<void>();
  onLike() {
    this.like.emit();
  }
}
