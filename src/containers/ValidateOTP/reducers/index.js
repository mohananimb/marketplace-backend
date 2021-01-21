import { otp, verifyOTP } from '../constants'

const initialOTPState = {
  otp: ''
}

const intialSendOTPState = {
  loading: false,
  success: false,
  error: '',
  data: []
}

export const setOTP = (state = initialOTPState, action) => {
  switch (action.type) {
    case otp.adding:
      return {
        otp: action.payload
      }
    default:
      return state
  }
}

export const sendOTP = (state = intialSendOTPState, action) => {
  switch (action.type) {
    case verifyOTP.loading:
      return {
        ...state,
        loading: true
      }

    case verifyOTP.success:
      return {
        loading: false,
        success: true,
        data: action.data.data
      }

    case verifyOTP.error:
      return {
        loading: false,
        success: false,
        error: action.error
      }

    case 'DESTROY':
      return {
        loading: false,
        success: false,
        error: '',
        data: []
      }

    default:
      return state
  }
}
