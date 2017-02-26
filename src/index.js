'use strict';
import './assert/scss/index.scss';
import React from 'react';
import WrapContainer from './containers/wrap/index.js';
import DrawWrapContainer from './containers/wrap/draw.js';
import CreateContainer from './containers/create/index.js';
import DrawContainer from './containers/draw/index.js';

import rab, { connect } from 'rabjs';
import { Router, Route } from 'rabjs/router';
const app = rab();

app.router(({ history }) => {
    return (
        <Router history={history}>
            <Route path="/board" component={WrapContainer}>
                <Route path="create" component={CreateContainer} />
                <Route path="recently" component={CreateContainer} />
                <Route path="open" component={CreateContainer} />
            </Route>
            <Route path="/draw" component={DrawWrapContainer}>
                <Route path="index" component={DrawContainer} />
            </Route>
        </Router>
    );
});

// 5. Start
app.start('#wrap_container');
