import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = props => {
  return null;
};

export default PublicRoute;

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