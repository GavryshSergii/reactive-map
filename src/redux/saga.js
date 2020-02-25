// import fetchJsonp from 'fetch-jsonp';

import { call, delay, put } from 'redux-saga/effects';
import { failure, loadDataSuccess, focusMarker } from './actions/layerGroups';

// import staticData from '../data.json';
// import staticDataBlast from '../dataBlast.json';

require('es6-promise').polyfill();

function* loadDataSaga() {
  try{
    const res = yield fetch('http://101.22.6.17/ajax.php');
    // const res = yield fetch('https://jsonplaceholder.typicode.com/users');
    const data = yield res.json();
    const layer = {
      id: 1,
      name: 'TRACKING',
      markers: data.reduce((obj, cur) =>{
        const marker = {
          ...cur,
          description: `адреса: ${cur.address} ip: ${cur.ip}`,
          event_type_id: (cur.online === '1') ? 1111 : 1000,
        };

        return {...obj, [cur.id]: marker};
      }, {})
    };
    yield put(loadDataSuccess(layer));
  } catch (err) {
    console.log(err);
    yield put(failure(err));
  }
}

// export function* loadDataSagaTest(data) {
//   try {
//     const layer = {
//       id: 1,
//       name: 'TRACKING',
//       markers: data.reduce((obj, cur) => {
//         const marker = {
//           ...cur,
//           description: `адреса: ${cur.address} ip: ${cur.ip}`,
//           event_type_id: (cur.online === '1') ? 1111 : 1000,
//         };
//
//         return {...obj, [cur.id]: marker};
//       }, {})
//     };
//     yield put(loadDataSuccess(layer));
//   } catch (err) {
//     console.log(err);
//   }
// }
//
// export function* sagaTest() {
//   yield call(loadDataSagaTest, staticData);
//   yield delay(5000);
//   yield call(loadDataSagaTest, staticDataBlast);
// }
//
// export function* onFocusMarker (data){
//   yield put(focusMarker(data));
// }

function* rootSaga() {
  while (true) {
    yield call(loadDataSaga);
    // yield call(sagaTest);
    yield delay(5000);
  }
}
export default rootSaga;
