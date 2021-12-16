import './App.css';

import React from 'react';
import Main from '../pages/Main';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import PostWrite from '../pages/PostWrite';
import PostDetail from '../pages/PostDetail';
import ProfileEdit from '../pages/ProfileEdit';
import MyPage from '../pages/MyPage';
import NotFound from '../pages/NotFound';
import { Container } from '../elements';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';
import Header from '../components/Header';
import { ThemeProvider } from 'styled-components';

function App() {
  console.log();
  return (
    <div className="App">
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/:path?/:id?" exact>
            <Header>
              <Container margin="0px">
                <Switch>
                  <Route path="/" exact component={Main}></Route>
                  <Route path="/postWrite" exact component={PostWrite}></Route>
                  <Route
                    path="/postDetail/:postId"
                    exact
                    component={PostDetail}
                  ></Route>
                  <Route
                    path="/profileEdit"
                    exact
                    component={ProfileEdit}
                  ></Route>
                  <Route path="/myPage/:id" exact component={MyPage}></Route>
                </Switch>
              </Container>
            </Header>
          </Route>
          <Route path="/in/:path?" exact>
            <Container margin="0px">
              <Switch>
                <Route path="/in/signIn" exact component={SignIn}></Route>
                <Route path="/in/signUp" exact component={SignUp}></Route>
              </Switch>
            </Container>
          </Route>
          <Route component={NotFound}></Route>
        </Switch>
      </ConnectedRouter>
    </div>
  );
}

export default App;
