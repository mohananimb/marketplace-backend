import { call, put } from 'redux-saga/effects'
import { sent, error as err } from '../actions/phone'
import send from '../api'

export function * handlePhone (data) {
  try {
    const info = yield call(send, data.number)
    yield put(sent(info))
  } catch (error) {
    yield put(err(error))
  }
}
