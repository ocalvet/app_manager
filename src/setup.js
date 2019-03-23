import axios from 'axios';
import createStore from './store';
import { startSignout } from './actions';
import { HTTP_UNAUTHORIZED, REDIRECT_URL_KEY } from './shared/constants';

export default () => {
  const store = createStore();
  axios.interceptors.response.use(
    response => response,
    error => {
      const { status } = error.response;
      if (status === HTTP_UNAUTHORIZED) {
        localStorage.setItem(REDIRECT_URL_KEY, window.location.pathname);
        store.dispatch(startSignout());
      }
      return Promise.reject(error);
    }
  );
  return {
    store
  };
};
