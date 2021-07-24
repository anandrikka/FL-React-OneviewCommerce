import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from '../config/redux/store';
import UserPostsPage from '../pages/user-posts';
import UsersPage from '../pages/users';
import Body from './body';
import Header from './header';

const App: FC<{}> = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <div className="app-container">
            <Header />
            <Body>
              <Switch>
                <Route exact path="/" component={UsersPage} />
                <Route exact path="/user/:id/posts" component={UserPostsPage} />
              </Switch>
            </Body>
          </div>
        </Router>
      </Provider>
    </React.StrictMode>
  )
}

export default App;
