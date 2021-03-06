import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import configureStore from './store';
import App from './App';
import './styles/reset.scss';

import {register as registerServiceWorker} from './serviceWorker';

ReactDOM.render(
    <Provider store={configureStore()}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
