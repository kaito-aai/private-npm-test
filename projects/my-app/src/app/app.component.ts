import { Component } from '@angular/core';
import { SampleService } from 'projects/test-lib/src/lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  message = 'my-app';

  constructor(private ss: SampleService) {}

  changeMessage() {
    this.message = this.ss.getMessage();
  }
}
