import { Component } from '@angular/core';

@Component({
  selector: '',
  template : `
  <ul>
    <li *ngFor = "let tech of Technologies">
        {{tech}}
    </li>
  </ul>
  `
})
export class TechnologiesComponent{
    Technologies : Array<string> = ['C#','Angular','Node'];
}