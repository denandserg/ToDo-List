import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import AppRoot from './app/components/AppRoot/AppRoot';
import { runRootSaga } from './redux/configureStore';
import * as serviceWorker from './serviceWorker';

runRootSaga();

ReactDOM.render(<AppRoot />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
