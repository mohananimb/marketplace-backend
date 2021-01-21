import { takeLatest } from 'redux-saga/effects'
import { handlePhone } from './containers/SignUp/saga'
import { sendOTP } from './containers/SignUp/constants'
import { verifyOTP } from './containers/ValidateOTP/constants'
import { handleOTP } from './containers/ValidateOTP/saga'
import { createUser } from './containers/UserDetails/constants'
import { handleUser } from './containers/UserDetails/saga'
export default function * rootSaga () {
  yield takeLatest(sendOTP.loading, handlePhone)
  yield takeLatest(verifyOTP.loading, handleOTP)
  yield takeLatest(createUser.loading, handleUser)
}
