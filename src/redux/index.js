'use strict';
import {createStoreWithMiddleware} from './create-store';
import indexReducer from './reducer/index.js';

var _store = createStoreWithMiddleware(indexReducer);
window._store = _store;
export const dispatch = _store.dispatch;
export const store = _store;
