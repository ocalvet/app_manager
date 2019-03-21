import { APP_LOADING_START, APP_LOADING_DONE } from '../actions';

const auth = (state = { openRequests: 0, appLoading: true }, action) => {
  if (action.type.startsWith('REQUEST')) {
    if (action.type.includes('FAILED') || action.type.includes('SUCCEEDED')) {
      return { ...state, openRequests: state.openRequests - 1 };
    } else {
      return { ...state, openRequests: state.openRequests + 1 };
    }
  } else {
    switch (action.type) {
      case APP_LOADING_START:
        return { ...state, appLoading: true };
      case APP_LOADING_DONE:
        return { ...state, appLoading: false };
      default:
        return state;
    }
  }
};

export default auth;
