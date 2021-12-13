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

import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';

function App() {
  return (
    <div className="App">
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact component={Main}></Route>
          <Route path="/signIn" exact component={SignIn}></Route>
          <Route path="/signUp" exact component={SignUp}></Route>
          <Route path="/postWrite" exact component={PostWrite}></Route>
          <Route
            path="/postDetail/:postId"
            exact
            component={PostDetail}
          ></Route>
          <Route path="/profileEdit" exact component={ProfileEdit}></Route>
          <Route path="/myPage" exact component={MyPage}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </ConnectedRouter>
    </div>
  );
}

export default App;
