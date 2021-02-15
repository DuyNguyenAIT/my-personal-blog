import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  //The auth guard is an angular route guard that prevents unauthenticated users from accessing restricted routes, 
  //it does this by implementing the CanActivate interface which allows the guard to decide if a route can be activated with the canActivate() method.
  constructor(
    private router: Router, private authenticationService: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      const user = this.authenticationService.userValue;
      if (user) {
          // logged in so return true
          return true;
      } else {
          // not logged in so redirect to login page with the return url
          this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
          return false;
      }
  }

}
