import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import sagas from './sagas';
import reducers from './ducks';

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middleware = [sagaMiddleware];

// const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;

const store = createStore(
  reducers,
  compose(
    applyMiddleware(...middleware),
    console.tron.createEnhancer(),
  ),
);

sagaMiddleware.run(sagas);

export default store;
