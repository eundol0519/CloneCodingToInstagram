import React from "react";
import { Route, Redirect } from "react-router-dom";
import Container from "../elements/Container";
import { isLogin } from "../shared/permit";
import Header from "./Header";

const PrivateRoute = ({ Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isLogin() ? (
          <Header>
            <Container margin="0px">
              <Component {...props}></Component>
            </Container>
          </Header>
        ) : (
          <Redirect to="/in/signIn" />
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
