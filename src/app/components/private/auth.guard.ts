import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { UserState } from '../public/auth/state/user.state';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private readonly store: Store, private readonly router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentUser = this.store.selectSnapshot(UserState.currentUser)
    if (currentUser) {
      const roles = route.data["roles"]
      if (roles) {
        if (currentUser.roles.some(role => roles.includes(role))) {
          return true
        }
        this.router.navigate(["/forbidden"])
        return false
      }
      return true;
    }
    this.router.navigate(["/auth/login"])
    return false;
  }
  
}
