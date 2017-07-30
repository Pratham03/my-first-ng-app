import { Component, OnInit } from '@angular/core';
import { appService } from './app.service';


@Component({
  selector: 'app-root',
  providers:[appService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public tasksList : appService){
    
  }

  ngOnInit(){
    this.tasksList.getMyTasks();
  }


  titles : Array<string> = ['My First Angular App','My First Angular App 2'];
  myVariable : string = "";
  

  doThis(){
    alert("Welcome to the world of Angular!");
  };
}
