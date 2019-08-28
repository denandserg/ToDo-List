import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';

import ApiSelectors from '../../redux/selectors';
import Loader from '../components/Loader';
import CommonPageLayout from '../containers/CommonPageLayout';
import Footer from '../containers/Footer';
import Header from '../containers/Header';
import TodoPage from '../page/TodoPage';
import RoutePaths from './paths';
import sm from './styles.module.scss';

export default function AppRoutes() {
  const dispatch = useDispatch();

  useEffect(() => {
    const path = window.location.search.search(/code=/);
    const password = window.location.search.slice(path + 5);
    if (password.length > 20) {
      sessionStorage.setItem('token', password);
      dispatch({ type: 'IS_SIGNED' });
    }
  }, [dispatch]);

  const isSigned = useSelector(ApiSelectors.isSigned);

  return (
    <div className={sm.AppRoutes}>
      <React.Suspense fallback={<Loader />}>
        <header className={sm.AppRoutes_Header}>
          <Switch>
            <Route component={() => <Header />} />
          </Switch>
        </header>
        <main className={sm.AppRoutes_Main}>
          {isSigned && (
            <Switch>
              <Route
                exact
                path={RoutePaths._()}
                render={() => (
                  <CommonPageLayout renderMainContent={() => <TodoPage />} />
                )}
              />
            </Switch>
          )}
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
