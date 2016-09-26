import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Item from './components/list/Item';
import ListPage from './components/list/ListPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ListPage} />
    <Route path="list" component={ListPage} />
    <Route path="event/:id" component={Item} />
  </Route>
);
