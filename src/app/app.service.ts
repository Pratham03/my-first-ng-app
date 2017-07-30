import { Injectable } from '@angular/core';
import { HttpModule, Response, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class appService{
    myTasks : any;

    constructor(private _http : Http){

    }

    getMyTasks(){
        var aPromise = this._http.get("../tasks.json")
        .map((response : Response) => response.json().data)
        .toPromise()

        aPromise.then(myTasksFromServer => this.myTasks = myTasksFromServer);
    }
}