export class AuthAction {
  static readonly type = '[Auth] Add item';
  constructor(readonly payload: string) {}
}

// Commands
export class LoginUser {
  static readonly type = '[Auth] Login User';
  constructor(readonly payload: string) {}
}

export class LogoutUser {
  static readonly type = '[Auth] Logout User';
  constructor() {}
}

// Actions
export class SetLoginData {
  static readonly type = '[Auth] Set Login Success';
  constructor(readonly token: string, readonly username: string) {}
}

export class SetUserError {
  static readonly type = '[Auth] Set User Error';
  constructor(readonly error: string) {}
}

export class SetLogoutSuccess {
  static readonly type = '[Auth] Set Logout Success';
  constructor() {}
}
