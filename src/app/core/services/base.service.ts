import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class BaseService {

  baseUrl = environment.developmentUrl;
  apiUrl: string = 'api';

  httpOptions = {
    header: new Headers({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };

  constructor() {}

   // tslint:disable-next-line: typedef
   errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    console.log(errorMessage);
    return throwError(errorMessage);
  }
}