import { TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { AuthState } from './auth.state';
import { AuthAction } from './auth.actions';
import { AuthStateModel } from './auth.state.model';
import { AuthSelectors } from './auth.state.selectors';

describe('Auth store', () => {
  let store: Store;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([AuthState])],
    });

    store = TestBed.inject(Store);
  });
});
