import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <header></header>
    <div class="wrapper">
        <countries></countries>
        <cities></cities>
    </div>
  `,
  styles: [
    `
      .wrapper {
          width: 80%;
          margin: 0 auto;
      }
    `
  ]
})
export class AppComponent  { }
