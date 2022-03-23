import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LogoutUserAction } from '../public/auth/state/user.actions';
import { Select, Store } from '@ngxs/store';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  languages = [
    {
      label: "PL",
      value: "pl"
    },
    {
      label: "EN",
      value: "en"
    }
  ]

  @Select(state => state.user.token)
  token$: Observable<string>

  @Select(state => state.basket.basketSize)
  basketSize$: Observable<number>

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private readonly store: Store, private readonly translateService: TranslateService) {}

  logout() {
    this.store.dispatch(new LogoutUserAction())
  }

  changeLanguage(language: string) {
    this.translateService.use(language);
  }

}
