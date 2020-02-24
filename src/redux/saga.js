// import fetchJsonp from 'fetch-jsonp';

import { call, delay, put } from 'redux-saga/effects';
import { failure, loadDataSuccess } from './actions/layerGroups';

import staticData from '../data.json';
import staticDataBlast from '../dataBlast.json';

require('es6-promise').polyfill();

function* loadDataSaga() {
  try{
    const res = yield fetch('http://101.22.6.17/ajax.php');
    // const res = yield fetch('https://jsonplaceholder.typicode.com/users');
    let data = yield res.json();
    const layer = {
      id: 1,
      name: 'TRACKING',
      markers: data.reduce((obj, cur) =>{ return {...obj, [cur.id]: cur};},{})
    };
    yield put(loadDataSuccess(layer));
  } catch (err) {
    console.log(err);
    yield put(failure(err));
  }
}

export function* loadDataSagaTest(data) {
  try {
    const layer = {
      id: 1,
      name: 'TRACKING',
      markers: data.reduce((obj, cur) => {
        return { ...obj, [cur.id]: cur };
      }, {})
    };
    yield put(loadDataSuccess(layer));
  } catch (err) {
    console.log(err);
  }
}

export function* sagaTest() {
  yield call(loadDataSagaTest, staticData);
  yield delay(5000);
  yield call(loadDataSagaTest, staticDataBlast);
}

function* rootSaga() {
  while (true) {
    yield call(loadDataSaga);
    // yield call(sagaTest);
    yield delay(5000);
  }
}
export default rootSaga;
