import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware, { Saga, SagaMonitor } from 'redux-saga';

import devConsole from '../utils/devConsole';
import createRootReducer from './createRootReducer';
import rootSaga from './rootSaga';

export const initialRootState = {};

export const history = createBrowserHistory();

export const store = function configureStore(
  initialState = { ...initialRootState }
) {
  return createStore(
    createRootReducer({ history }),
    initialState,
    composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
  );
};

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: <F extends Function>(f: F) => F;
    __SAGA_MONITOR_EXTENSION__: SagaMonitor;
  }
}

const composeEnhancers =
  process.env.NODE_ENV === 'development' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const monitor =
  process.env.NODE_ENV === 'development' && window.__SAGA_MONITOR_EXTENSION__
    ? window.__SAGA_MONITOR_EXTENSION__
    : undefined;

export const sagaMiddleware = createSagaMiddleware({
  sagaMonitor: monitor,
  onError: (...args) => {
    devConsole.error(...args);
  }
});

export const runSaga = (saga: Saga, ...args: unknown[]) =>
  sagaMiddleware.run(saga, ...args);

export const runRootSaga = () => sagaMiddleware.run(rootSaga);
