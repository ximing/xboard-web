'use strict';
import './assert/scss/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { Router, Route } from 'react-router';
import { browserHistory } from 'react-router';
import {store} from './redux/index';

import WrapContainer from './containers/wrap/index.js';
import DrawWrapContainer from './containers/wrap/draw.js';

import CreateContainer from './containers/create/index.js';
import DrawContainer from './containers/draw/index.js';


ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/board" component={WrapContainer}>
                <Route path="create" component={CreateContainer} />
                <Route path="recently" component={CreateContainer} />
                <Route path="open" component={CreateContainer} />
            </Route>
            <Route path="/draw" component={DrawWrapContainer}>
                <Route path="index" component={DrawContainer} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('wrap_container')
);