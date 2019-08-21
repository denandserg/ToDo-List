import React from 'react';
import { Redirect, Switch } from 'react-router';

import RoutePaths from './paths';
import sm from './styles.module.scss';

export default function AppRoutes() {
  return (
    <div className={sm.AppRoutes}>
      <React.Suspense fallback={<div />}>
        <main className={sm.AppRoutes_Main}>
          <Switch>
            <Redirect to={RoutePaths._()} />
          </Switch>
        </main>
      </React.Suspense>
    </div>
  );
}
