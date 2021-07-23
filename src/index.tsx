import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './config/redux/store';
import { UsersPage } from './pages/users';
import { UserPostsPage } from './pages/user-posts';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Header } from './components/header';
import { Body } from './components/body';

ReactDOM.render(
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
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
