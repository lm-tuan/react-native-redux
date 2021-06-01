import { createStore, applyMiddleware, compose   } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './rootReducer';
import rootSaga from './rootSaga';

const composeEnhancers = compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer(),
  composeEnhancers(applyMiddleware(sagaMiddleware)),

);

sagaMiddleware.run(rootSaga);
export default store;