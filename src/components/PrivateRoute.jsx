import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = props => {
  return null;
};

export default PrivateRoute;

const AppRoute = ({ Component, Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        <Container margin="0px">
          <Component {...props}></Component>
        </Container>
      </Layout>
    )}
  ></Route>