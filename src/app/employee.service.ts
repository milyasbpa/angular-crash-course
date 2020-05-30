import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/catch';
import {catchError} from 'rxjs/operators'
// import 'rxjs/add/observable/throw';
import {throwError, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // constructor() { }

  // getEmployee(){
  //   return [
  //     {"id":1, "name":"Andrew","age":30},
  //     {"id":2, "name":"Bas","age":25},
  //     {"id":3, "name":"Charlotte","age":26},
  //     {"id":4, "name":"Delleanor","age":28},

  //   ]
  // }

  // FETCH DATA
  private _url: string = "/assets/data/employees.json"

  constructor(private http : HttpClient) { }

  getEmployee(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url).pipe(catchError(this.errorHandler));
  }
  errorHandler(error:HttpErrorResponse){
    return throwError(error.message || "Server Error" );
  }
}
