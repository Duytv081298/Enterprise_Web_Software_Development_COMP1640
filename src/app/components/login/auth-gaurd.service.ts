import { Injectable } from '@angular/core';
import {LoginComponent} from '../login/login.component'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(private router: Router,
    private loginComponent: LoginComponent) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.loginComponent.isUserLoggedIn())
      return true;

    this.router.navigate(['login']);
    return false;

  }
}
