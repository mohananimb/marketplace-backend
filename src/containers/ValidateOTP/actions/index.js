import { otp, verifyOTP } from '../constants'

export const setOTP = data => {
  return {
    type: otp.adding,
    payload: data.payload
  }
}

export const sendOTP = payload => {
  return {
    type: verifyOTP.loading,
    payload
  }
}

export const sent = data => {
  return {
    type: verifyOTP.success,
    data
  }
}

export const error = error => {
  return {
    type: verifyOTP.error,
    error
  }
}
