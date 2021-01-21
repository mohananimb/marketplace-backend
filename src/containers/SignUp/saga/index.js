import { call, put } from 'redux-saga/effects'
import { sent, error as err } from '../actions/phone'
import send from '../api'

export function * handlePhone (number) {
  try {
    const info = yield call(send, number)
    console.log("INF", info);
    yield put(sent(info))
  } catch (error) {
    console.log("SAGA", error);
    yield put(err(error))
  }
}
