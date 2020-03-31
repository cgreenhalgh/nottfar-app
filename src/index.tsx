import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import './index.css';
import SlotView from './views/SlotView';
import ListView from './views/ListView';
import ExperienceView from './views/ExperienceView';
import ExperienceListView from './views/ExperienceListView';
import store from './store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import theme from './theme';

ReactDOM.render(
  <Provider store={store}>
   <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Switch>
        <Route path="/:experienceId/:listId/:slotKey/at/:viewKey" component={SlotView} />
        <Route path="/:experienceId/:listId/:slotKey/" component={SlotView} />
        <Route path="/:experienceId/:listId/at/:viewKey" component={ListView} />
        <Route path="/:experienceId/:listId" component={ListView} />
        <Route path="/:experienceId" component={ExperienceView} />
        <Route path="/" component={ExperienceListView} />
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
