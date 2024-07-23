import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthSelectors } from './state/auth/auth.state.selectors';
import { AuthLoginAction, AuthLogoutAction } from './state/auth/auth.actions';
import { AsyncPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [AsyncPipe, NgClass],
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
  loading$: Observable<boolean> = this.store.select(AuthSelectors.loading);

  login() {
    this.store.dispatch(new AuthLoginAction('someImportantDataToLogin'));
  }

  logout() {
    this.store.dispatch(new AuthLogoutAction());
  }
}
