export const authStateTokenKey = 'auth.token';

export interface AuthStateModel {
  token: string | null;
  username: string | null;
  loading: boolean;
}

export const authStateModelDefaults: AuthStateModel = {
  token: null,
  username: null,
  loading: false,
};
