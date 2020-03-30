import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/a">A</Link>
          </li>
        </ul>

      <Switch>
        <Route path="/a" component={App} />
        <Route path="*">
          <Error/>
        </Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
function Error() {
  return <h2>Error</h2>;
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
