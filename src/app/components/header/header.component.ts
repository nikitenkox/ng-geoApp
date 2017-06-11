import { Component } from '@angular/core';

@Component({
  selector: 'header',
  template: `
    <div class="header">
      <h3>Countries of the world</h3>
    </div>
  `,
  styles: [
    `
    .header {
        padding: 2% 10%;
        background-color: #0072bc;
        color: white;
    }
    `
  ]
})
export class HeaderComponent  { }
