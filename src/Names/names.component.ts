import { Component } from '@angular/core';

@Component({
  selector: '',
  template : `
  <ul>
    <li *ngFor = "let name of Names">
        {{name}}
    </li>
  </ul>
  `
})
export class NamesComponent{
    Names : Array<string> = ['John','Johnny','Janardan'];
}