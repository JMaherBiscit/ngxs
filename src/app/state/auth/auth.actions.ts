export class AuthAction {
  static readonly type = '[Auth] Add item';
  constructor(readonly payload: string) {}
}

export class AuthLoginAction {
  static readonly type = '[Auth] Login';
  constructor(readonly payload: string) {}
}

export class AuthLogoutAction {
  static readonly type = '[Auth] Logout';
  constructor() {}
}
