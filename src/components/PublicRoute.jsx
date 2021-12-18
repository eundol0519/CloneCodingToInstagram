import React from "react";
import { Route, Redirect } from "react-router-dom";
import Container from "../elements/Container";
import { isLogin } from "../shared/permit";

const PublicRoute = ({ Component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isLogin() && restricted ? (
          <Redirect to="/" />
        ) : (
          <Container margin="0px">
            <Component {...props} />
          </Container>
        )
      }
    />
  );
};

export default PublicRoute;
