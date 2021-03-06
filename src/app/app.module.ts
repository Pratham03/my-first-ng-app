import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { TechnologiesComponent } from "../Technologies/technologies.component";
import { NamesComponent } from "../Names/names.component";


const appRoutes : Routes = [
  {
    path : 'names' , 
    component : NamesComponent 
  },
  {
    path: 'technologies' ,
    component : TechnologiesComponent 
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NamesComponent,
    TechnologiesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
