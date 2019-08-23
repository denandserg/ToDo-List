import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import api, { ApiState } from './reducer';

export interface RootState {
  router: RouterState;
  api: ApiState;
}

export default function createRootReducer({ history }: { history: History }) {
  return combineReducers({
    router: connectRouter(history),
    form: formReducer,
    api
  });
}
