import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  timer: any;
  count = 0;
  @Output() getCurrentNumber = new EventEmitter<number>();

  constructor() { }

  startGame() {
    this.timer = setInterval(() => {
      ++this.count;
      this.getCurrentNumber.emit(this.count);
    }, 1000)
  }

  stopGame() {
    clearInterval(this.timer);
  }
}
