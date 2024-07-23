import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthSelectors } from './state/auth/auth.state.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private store: Store) {}

  token$: Observable<string | null> = this.store.select(AuthSelectors.token);
  isAuthenticated$: Observable<boolean> = this.store.select(
    AuthSelectors.isAuthenticated
  );
  username$: Observable<string | null> = this.store.select(
    AuthSelectors.username
  );

  login() {}

  logout() {}
}
