import {
  REQUEST_LOGIN_SUCCEEDED,
  REQUEST_LOGIN_FAILED,
  USER_AUTHENTICATED,
  SIGNOUT_COMPLETED
} from '../actions';

const auth = (state = { user: {}, error: undefined }, action) => {
  switch (action.type) {
    case REQUEST_LOGIN_SUCCEEDED:
      return {
        ...state,
        user: { ...action.user },
        error: undefined
      };
    case REQUEST_LOGIN_FAILED:
      return {
        ...state,
        user: {},
        error: action.error
      };
    case USER_AUTHENTICATED:
      return {
        ...state,
        user: action.user,
        error: undefined
      };
    case SIGNOUT_COMPLETED:
      return {
        ...state,
        user: {},
        error: undefined
      };

    default:
      return state;
  }
};

export default auth;
