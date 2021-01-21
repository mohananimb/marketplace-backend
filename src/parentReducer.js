import { combineReducers } from 'redux'
import { setPhone, sendPin } from './containers/SignUp/reducers'
import { sendOTP, setOTP } from './containers/ValidateOTP/reducers'
import {user} from "./containers/UserDetails/reducers"
const rootReducer = combineReducers({
  setPhone,
  sendPin,
  setOTP,
  sendOTP,
  user
})


export default rootReducer
