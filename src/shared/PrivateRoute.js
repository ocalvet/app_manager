import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import Layout from './Layout';

class PrivateRoute extends React.Component {
  render() {
    const { isAuthenticated, component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            <Layout title={rest.title}>
              <Component {...props} />
            </Layout>
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated:
    state.auth.user && state.auth.user.token && state.auth.user.token.length > 0
});

export default withRouter(connect(mapStateToProps)(PrivateRoute));
