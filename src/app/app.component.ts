import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { LoginFromLocalStorageAction } from './components/public/auth/state/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit{

  constructor (private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new LoginFromLocalStorageAction())
  }
  
}
