import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { AuthStateModel, authStateModelDefaults } from './auth.state.model';
import { AuthService } from 'src/app/services/auth.service';
import { AuthLoginAction, AuthLogoutAction } from './auth.actions';
import { tap } from 'rxjs';

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    loading: false,
    token: null,
    username: null,
  },
})
@Injectable()
export class AuthState {
  constructor(private authService: AuthService) {}

  @Action(AuthLoginAction)
  login(ctx: StateContext<AuthStateModel>, action: AuthLoginAction) {
    // handleRequestPayload(action.payload);

    ctx.patchState({
      loading: true,
    });
    return this.authService.login().pipe(
      tap((result) => {
        ctx.patchState({
          token: result.token,
          username: result.username,
          loading: false,
        });
      })
    );
  }

  @Action(AuthLogoutAction)
  logout(ctx: StateContext<AuthStateModel>, action: AuthLogoutAction) {
    // handleRequestPayload(action.payload);

    ctx.patchState({
      loading: true,
    });
    return this.authService.logout().pipe(
      tap(() => {
        ctx.patchState({
          token: null,
          username: null,
          loading: false,
        });
      })
    );
  }
}
