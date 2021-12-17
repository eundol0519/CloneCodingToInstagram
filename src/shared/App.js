import "./App.css";

import React, { Component } from "react";
import Main from "../pages/Main";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import PostWrite from "../pages/PostWrite";
import PostDetail from "../pages/PostDetail";
import ProfileEdit from "../pages/ProfileEdit";
import MyPage from "../pages/MyPage";
import NotFound from "../pages/NotFound";
import { Container } from "../elements";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import Header from "../components/Header";
import noneHeader from "../components/noneHeader";
import PublicRoute from "../components/PublicRoute";
import PrivateRoute from "../components/PrivateRoute";

function App() {
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
  );
  return (
    <div className="App">
      <ConnectedRouter history={history}>
        <Switch>
          <Switch>
            <PrivateRoute Component={Main} path="/" exact></PrivateRoute>
            <PrivateRoute
              exact
              path="/profileEdit"
              Component={ProfileEdit}
            ></PrivateRoute>
            <PrivateRoute
              exact
              path="/myPage/:id"
              Component={MyPage}
            ></PrivateRoute>
            <PublicRoute
              exact
              restricted={true}
              path="/in/signIn"
              Component={SignIn}
            ></PublicRoute>
            <PublicRoute
              exact
              restricted={true}
              path="/in/signUp"
              Component={SignUp}
            ></PublicRoute>
            <PublicRoute
              restricted={false}
              exact
              component={NotFound}
            ></PublicRoute>
          </Switch>
        </Switch>
      </ConnectedRouter>
    </div>
  );
}

export default App;
