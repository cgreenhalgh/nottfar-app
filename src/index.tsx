import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

ReactDOM.render(
  <Provider store={store}>
   <ThemeProvider theme={theme}>
    <CssBaseline />

    <Router>

      <Box>
        <Button color="primary" component={Link} to="/">
          Home
        </Button>
        <Button color="primary" component={Link} to="/a">
          A
        </Button>
      </Box>

      <Switch>
        <Route path="/a" component={App} />
        <Route path="*">
          <Error/>
        </Route>
      </Switch>
    </Router>
   </ThemeProvider>
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
