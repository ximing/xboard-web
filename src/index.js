'use strict';
import './assert/scss/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { Router, Route } from 'react-router';
import { browserHistory } from 'react-router';
import {store} from './redux/index';

import WrapContainer from './containers/wrap/index.js';
import CreateContainer from './containers/create/index.js';


ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/board" component={WrapContainer}>
                <Route path="create" component={CreateContainer} />
                <Route path="recently" component={CreateContainer} />
                <Route path="open" component={CreateContainer} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('wrap_container')
);