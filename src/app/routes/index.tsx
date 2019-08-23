import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import Loader from '../components/Loader';
import CommonPageLayout from '../containers/CommonPageLayout';
import Footer from '../containers/Footer';
import Header from '../containers/Header';
import TodoPage from '../page/TodoPage';
import RoutePaths from './paths';
import sm from './styles.module.scss';

export default function AppRoutes() {
  return (
    <div className={sm.AppRoutes}>
      <React.Suspense fallback={<Loader />}>
        <header className={sm.AppRoutes_Header}>
          <Switch>
            <Route component={() => <Header />} />
          </Switch>
        </header>
        <main className={sm.AppRoutes_Main}>
          <Switch>
            <Route
              exact
              path={RoutePaths._()}
              render={() => (
                <CommonPageLayout renderMainContent={() => <TodoPage />} />
              )}
            />
            <Redirect to={RoutePaths._()} />
          </Switch>
        </main>
        <footer className={sm.AppRoutes_Footer}>
          <Switch>
            <Route component={() => <Footer />} />
          </Switch>
        </footer>
      </React.Suspense>
    </div>
  );
}
