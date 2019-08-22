import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

export interface RootState {
  router: RouterState;
}

export default function createRootReducer({ history }: { history: History }) {
  return combineReducers({
    router: connectRouter(history),
    form: formReducer
  });
}
