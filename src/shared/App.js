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
            <AppRoute
              path="/"
              exact
              Layout={Header}
              Component={Main}
            ></AppRoute>
            <AppRoute path="/postWrite" exact Component={PostWrite}></AppRoute>
            <AppRoute
              exact
              path="/postDetail/:id"
              Layout={Header}
              Component={PostDetail}
            ></AppRoute>
            <AppRoute
              exact
              path="/profileEdit"
              Layout={Header}
              Component={ProfileEdit}
            ></AppRoute>
            <AppRoute
              exact
              path="/myPage/:id"
              Layout={Header}
              Component={MyPage}
            ></AppRoute>
            <AppRoute
              exact
              path="/in/signIn"
              Layout={noneHeader}
              Component={SignIn}
            ></AppRoute>
            <AppRoute
              exact
              path="/in/signUp"
              Layout={noneHeader}
              Component={SignUp}
            ></AppRoute>
            <AppRoute exact Layout={noneHeader} Component={NotFound}></AppRoute>
          </Switch>
        </Switch>
      </ConnectedRouter>
    </div>
  );
}

export default App;
