import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Router } from 'react-router-dom';
import history from './history';
import PrivateRoute from './shared/PrivateRoute';
import LoginPage from './pages/Login/LoginPage';
import ApplicationsPage from './pages/ApplicationsPage/ApplicationsPage';
import ApplicationPage from './pages/ApplicationPage/ApplicationPage';
import ConfigurationPage from './pages/Configuration/ConfigurationPage';
import { appLoadingStart, startSignout } from './actions';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.onStartLoading();
  }
  render() {
    const { isAppLoading } = this.props;
    return isAppLoading ? (
      <div>Loading...</div>
    ) : (
      <Router history={history}>
        <div>
          <PrivateRoute
            path="/"
            title="Applications"
            exact
            component={ApplicationsPage}
          />
          <PrivateRoute
            path="/applications/:appUrl/"
            title="Applications"
            component={ApplicationPage}
          />
          <PrivateRoute
            path="/configuration/"
            title="Configuration"
            exact
            component={ConfigurationPage}
          />
          <Route path="/login/" component={LoginPage} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  isAppLoading: state.status.appLoading,
  user: state.auth.user
});

const mapDispatchToProps = dispatch => ({
  onStartLoading: () => dispatch(appLoadingStart()),
  onSignout: () => dispatch(startSignout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
