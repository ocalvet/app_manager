import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import { startSignout } from './actions';
import { HTTP_UNAUTHORIZED } from './shared/constants';

const store = createStore();
axios.interceptors.response.use(
  response => response,
  error => {
      const {status} = error.response;
      if (status === HTTP_UNAUTHORIZED) {
        // save url 
        store.dispatch(startSignout());
      }
      return Promise.reject(error);
 }
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
