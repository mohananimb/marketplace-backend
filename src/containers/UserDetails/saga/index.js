import { call, put } from 'redux-saga/effects'
import { success, error as err } from '../actions'
import signup from '../api'

export function * handleUser (data) {
  try {
    const info = yield call(signup, data)
    yield put(success(info))
  } catch (error) {
    yield put(err(error))
  }
}
