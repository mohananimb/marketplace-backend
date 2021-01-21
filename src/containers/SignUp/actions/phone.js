import { phone, sendOTP } from '../constants'

export const setPhone = data => {
  return {
    type: phone.adding,
    payload: data.payload
  }
}

export const sendPin = number => {
  return {
    type: sendOTP.loading,
    number
  }
}

export const sent = data => {
  return {
    type: sendOTP.success,
    data
  }
}

export const error = error => {
  return {
    type: sendOTP.error,
    error
  }
}
