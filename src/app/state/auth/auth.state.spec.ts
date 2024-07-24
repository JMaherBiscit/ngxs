import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { provideStore, Store } from '@ngxs/store';
import { LoginUser } from './auth.actions';
import { AuthState } from './auth.state';
import { AuthSelectors } from './auth.state.selectors';

describe('Auth store', () => {
  let store: Store;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideStore([AuthState])],
    });

    store = TestBed.inject(Store);
  });

  it('logs in user', fakeAsync(() => {
    // Dispatch login action
    store.dispatch(new LoginUser('data'));

    // Check pre state
    let isAuthenticated = store.selectSnapshot(AuthSelectors.isAuthenticated);
    expect(isAuthenticated).toEqual(false);

    // Wait for the action to be processed
    tick(3000);

    // Check post state
    isAuthenticated = store.selectSnapshot(AuthSelectors.isAuthenticated);
    expect(isAuthenticated).toEqual(true);
  }));
});
