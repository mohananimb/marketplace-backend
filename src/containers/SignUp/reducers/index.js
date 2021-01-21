import { phone, sendOTP } from '../constants'

const initialPhoneState = {
  phone: ''
}

const initialOTPState = {
  loading: false,
  success: false,
  error: '',
  data: []
}

export const setPhone = (state = initialPhoneState, action) => {
  switch (action.type) {
    case phone.adding:
      return {
        phone: action.payload
      }
    default:
      return state
  }
}

export const sendPin = (state = initialOTPState, action) => {
  switch (action.type) {
    case sendOTP.loading:
      return {
        ...state,
        loading: true
      }

    case sendOTP.success:
      return {
        ...state,
        loading: false,
        success: true,
        data: action.data.data
      }

    case sendOTP.error:
      return {
        ...state,
        loading: false
      }

    default:
      return state
  }
}
