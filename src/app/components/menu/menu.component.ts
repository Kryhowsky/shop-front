import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UserState, UserStateModel } from '../public/auth/state/user.state';
import { LogoutUserAction } from '../public/auth/state/user.actions';
import { Select, Store } from '@ngxs/store';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  @Select(state => state.user.token)
  token$: Observable<string>

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private readonly store: Store) {}

  logout() {
    this.store.dispatch(new LogoutUserAction())
  }

}
