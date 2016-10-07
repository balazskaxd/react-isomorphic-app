import React from 'react';
import { Route, IndexRoute } from 'react-router';
import AppContainer from './container/AppContainer';
import IndexPage from './components/IndexPage';
import SuccessPage from './components/SuccessPage';
import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={IndexPage} />
    <Route path="success" component={SuccessPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);

export default routes;
