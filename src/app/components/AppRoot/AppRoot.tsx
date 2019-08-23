import { ConnectedRouter } from 'connected-react-router';
import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';

import { history, store } from '../../../redux/configureStore';
import AppRoutes from '../../routes';

export default AppRoot;

const storeInstance = store();

function AppRoot(): ReactElement {
  return (
    <Provider store={storeInstance}>
      <ConnectedRouter history={history}>
        <AppRoutes />
      </ConnectedRouter>
    </Provider>
  );
}
