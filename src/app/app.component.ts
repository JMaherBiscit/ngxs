import { AsyncPipe, NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { LoginUser, LogoutUser } from './state/auth/auth.actions';
import { AuthSelectors } from './state/auth/auth.state.selectors';

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
  error$: Observable<string | null> = this.store.select(AuthSelectors.error);

  login() {
    this.store.dispatch(new LoginUser('someImportantDataToLogin'));
  }

  logout() {
    this.store.dispatch(new LogoutUser());
  }

  functionThatDoesSomethingImportant() {
    this.store = inject(Store);
    const snapshotToken = this.store.selectSnapshot(AuthSelectors.token);
    console.log(`token at this point in time is: ${snapshotToken}`);
    this.username$.subscribe((username) => {
      console.log(`username is: ${username}`);
    });
  }
}
