import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private authenticationServices: AuthenticationService) {}

  //The Error Interceptor intercepts http responses from the api to check if there were any errors. 
  //If the response is 401 Unauthorized or 403 Forbidden the user is automatically logged out of the application, 
  //all other errors are logged to the console and re-thrown up to the calling service so an alert with the error can be displayed in the UI.
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if([401,403].includes(err.status) && this.authenticationServices.userValue) {
        this.authenticationServices.logout();
      }
      const error = (err && err.error && err.error.message) || err.statusText;
      console.log(err);
      return throwError(error);
    }))
  }
}
