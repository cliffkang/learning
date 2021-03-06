import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  odd: number[] = [];
  even: number[] = [];

  emitToChildren(currentNumber: number) {
    currentNumber % 2 === 0
      ? this.even.push(currentNumber)
      : this.odd.push(currentNumber);
  }
}
