import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import Loader from '../components/Loader';
import RoutePaths from './paths';
import sm from './styles.module.scss';

export default function AppRoutes() {
  return (
    <div className={sm.AppRoutes}>
      <React.Suspense fallback={<div />}>
        <main className={sm.AppRoutes_Main}>
          <Switch>
            <Route exact path={RoutePaths._()} render={() => <Loader />} />
            <Redirect to={RoutePaths._()} />
          </Switch>
        </main>
      </React.Suspense>
    </div>
  );
}
