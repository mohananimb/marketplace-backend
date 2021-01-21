import { call, put } from 'redux-saga/effects'
import { sent, error as err } from '../actions'
import verify from '../api'

export function * handleOTP (data) {
  console.log('sss', data)
  try {
    const info = yield call(verify, data)
    yield put(sent(info))
  } catch (error) {
    console.log('ERR', error)
    yield put(err(error))
  }
}
