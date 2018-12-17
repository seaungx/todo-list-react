import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
// import createSagaMiddleware from 'redux-saga'
// import todoSaga from './sagas'
//
// const sagaMiddleware = createSagaMiddleware()
//
// const enhancer = composeEnhancers(
//   applyMiddleware(sagaMiddleware)
// )
//
// sagaMiddleware.run(todoSaga)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);

const store = createStore(
  reducer,
  enhancer
);
export default store;
