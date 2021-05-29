import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'

import {Provider} from './context/context';
import Routes from './routing/routes';
import App from './App';
import './index.css';

ReactDOM.render(
    <Provider>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
 );