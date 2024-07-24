import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { AuthStateModel, authStateModelDefaults } from './auth.state.model';
import { AuthService } from 'src/app/services/auth.service';
import {
  LoginUser,
  LogoutUser,
  SetLoginData,
  SetUserError,
} from './auth.actions';
import { catchError, finalize, map, tap } from 'rxjs';

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    loading: false,
    token: null,
    username: null,
    error: null,
  },
})
@Injectable()
export class AuthState {
  constructor(private authService: AuthService) {}

  // Command
  @Action(LoginUser)
  login(ctx: StateContext<AuthStateModel>, action: LoginUser) {
    ctx.patchState({
      loading: true,
    });

    return this.authService.login().pipe(
      tap((result) => {
        // Setter
        ctx.dispatch(new SetLoginData(result.token, result.username));
      }),
      catchError((error) => {
        ctx.dispatch(new SetUserError(error));
        return error;
      }),
      finalize(() => {
        ctx.patchState({
          loading: false,
        });
      })
    );
  }

  //Event
  @Action(SetLoginData)
  setLoginSuccess(ctx: StateContext<AuthStateModel>, action: SetLoginData) {
    ctx.patchState({
      token: action.token,
      username: action.username,
    });
  }

  @Action(SetUserError)
  setLoginError(ctx: StateContext<AuthStateModel>, action: SetUserError) {
    console.error('Error logging in', action.error);
    ctx.patchState({
      error: action.error,
      loading: false,
    });
  }

  @Action(LogoutUser)
  logout(ctx: StateContext<AuthStateModel>, action: LogoutUser) {
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
