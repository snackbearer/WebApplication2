import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;
  public someMessage = "firstMessage";

  public incrementCounter() {
    this.currentCount++;
    this.someMessage = "firstMessage " + this.currentCount;
  }



}
