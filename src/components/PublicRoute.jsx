import React from "react";
import { Route, Redirect } from "react-router-dom";
import Container from "../elements/Container";
import { isLogin } from "../shared/permit";
import noneHeader from "./noneHeader";

const PublicRoute = ({ Component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isLogin() && restricted ? (
          <Redirect to="/" />
        ) : (
          <noneHeader>
            <Container margin="0px">
              <Component {...props} />
            </Container>
          </noneHeader>
        )
      }
    />
  );
};

export default PublicRoute;
