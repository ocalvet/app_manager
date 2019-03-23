import {
  REQUEST_APPLICATIONS_SUCCEEDED,
  REQUEST_APPLICATIONS_FAILED,
  SELECT_APPLICATION
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
    case SELECT_APPLICATION:
      return {
        ...state,
        selected: action.application
      };
    default:
      return state;
  }
};

export default auth;
