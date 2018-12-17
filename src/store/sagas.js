import { takeEvery, put } from 'redux-saga/effects';
import { ADD_TODO_ITEM } from './actionTypes';
import { initListAction } from './actionCreators';
import axios from 'axios';

function* getInitList() {
  try {
    const res = yield axios.get('/todo/');
    const action = initListAction(res.data);
    yield put(action);
  } catch(e) {
    console.log('get todo failure');
  }
}

function* todoSaga() {
  yield takeEvery(ADD_TODO_ITEM, getInitList);
}

export default  todoSaga;
