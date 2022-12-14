import { createStore, applyMiddleware } from "redux";

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import createSagaMiddle from 'redux-saga';
import rootReducer from './rootReducer';
import { persistStore } from 'redux-persist';
import rootSaga  from './rootSaga';

const sagaMiddleware = createSagaMiddle();

export const middlewares = [thunk,sagaMiddleware, logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    store,
    persistor,
};