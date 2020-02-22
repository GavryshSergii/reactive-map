require('es6-promise').polyfill();
import fetchJsonp from 'fetch-jsonp';

import { call, delay, put } from 'redux-saga/effects';
import { failure, loadDataSuccess } from './actions/layerGroups';

function* loadDataSaga() {
  try{
    // const res = yield fetch('http://101.22.6.17/ajax.php');
    const res = yield fetchJsonp('http://101.22.6.17/ajax.php');
    const data = yield res.json();
    const layer = {
      id: 1,
      name: 'TRACKING',
      markers: data.reduce((obj, cur) =>{ return {...obj, [cur.id]: cur};},{})
    };
    yield put(loadDataSuccess(layer));
  } catch (err) {
    yield put(failure(err));
  }
}

function* rootSaga() {
  while (true) {
    yield call(loadDataSaga);
    yield delay(1000);
  }
}
export default rootSaga;
