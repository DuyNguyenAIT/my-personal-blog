import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authenticationServices: AuthenticationService) {}

  //he JWT Interceptor intercepts http requests from the application to add a JWT auth token to the Authorization header 
  //if the user is logged in and the request is to the application api url (environment.developmentUrl).
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const user = this.authenticationServices.userValue;
    const isLoggedIn = user && user.jwtToken;
    const isApiUrl = request.url.startsWith(environment.developmentUrl);
    if(isLoggedIn && isApiUrl) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${user.jwtToken}`}
      });
    }

    return next.handle(request);
  }
}
