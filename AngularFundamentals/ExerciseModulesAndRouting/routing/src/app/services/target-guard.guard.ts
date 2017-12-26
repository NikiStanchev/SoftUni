import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Route } from '@angular/compiler/src/core';

@Injectable()
export class TargetGuardGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(next.routeConfig.path === sessionStorage.getItem('token')){
        this.router.navigate(['error'], {});
        return false;
      }
      return true;
  }
}
