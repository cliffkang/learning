import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggle = true;
  times: Date[] = [];

  toggleButton = () => {
    this.toggle = !this.toggle;
    this.times.push(new Date());
  }
}
