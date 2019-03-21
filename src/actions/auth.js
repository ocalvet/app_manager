export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const REQUEST_LOGIN_FAILED = 'REQUEST_LOGIN_FAILED';
export const REQUEST_LOGIN_SUCCEEDED = 'REQUEST_LOGIN_SUCCEEDED';
export const USER_AUTHENTICATED = 'USER_AUTHENTICATED';
export const SIGNOUT_START = 'SIGNOUT_START';
export const SIGNOUT_COMPLETED = 'SIGNOUT_COMPLETED';

export const requestLogin = (username, password) => ({
  type: REQUEST_LOGIN,
  username,
  password
});
export const requestLoginSucceeded = user => ({
  type: REQUEST_LOGIN_SUCCEEDED,
  user
});
export const requestLoginFailed = error => ({
  type: REQUEST_LOGIN_FAILED,
  error
});
export const userAuthenticated = user => ({
  type: USER_AUTHENTICATED,
  user
});
export const startSignout = () => ({ type: SIGNOUT_START });
export const completeSignout = () => ({ type: SIGNOUT_COMPLETED });
