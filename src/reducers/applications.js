import {
  REQUEST_APPLICATIONS_SUCCEEDED,
  REQUEST_APPLICATIONS_FAILED
} from '../actions';

const auth = (
  state = { all: [], selected: undefined, error: undefined },
  action
) => {
  switch (action.type) {
    case REQUEST_APPLICATIONS_SUCCEEDED:
      return {
        ...state,
        all: [...action.applications],
        error: undefined
      };
    case REQUEST_APPLICATIONS_FAILED:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};

export default auth;
