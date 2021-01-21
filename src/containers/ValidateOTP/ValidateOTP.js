import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../../components/Layout/Layout'
import { otp, verifyOTP } from './constants'
function ValidateOTP ({ history }) {
  const [otpErr, setOtpErr] = useState('')
  const state = useSelector(state => state.sendOTP)
  const otpState = useSelector(state => state.setOTP)
  const phoneState = useSelector(state => state.setPhone)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!phoneState.phone) {
      window.location.href = '/'
    }
    if (state.success) {
      if (state.data.message === 'Invalid OTP.') {
        alert(state.data.message)
        dispatch({
          type: 'DESTROY'
        })
      } else {
        if (state.data.verification.valid) {
          if (state.data.message === 'User is not registered.') {
            alert('This user is not registered. Please Registered first.')

            history.push('/user-details')
          } else {
            localStorage.setItem('qube_token', state.data.user.token)
            alert('login success')
            window.location.href = '/dashboard'
          }
        }
      }
    }
  }, [state, history, phoneState, dispatch])

  const ValidateOtp = async () => {
    const match = otpState.otp.match(/^[0-9]{6}$/g)
    if (match) {
      dispatch({
        type: verifyOTP.loading,
        payload: {
          phone: phoneState.phone,
          // phone:"8793466424",
          code: otpState.otp
        }
      })
    } else {
      setOtpErr('Please Enter 6 digit valid otp.')
    }
  }

  const handleChange = e => {
    setOtpErr('')
    dispatch({
      type: otp.adding,
      payload: e.target.value
    })
  }
  return (
    <Layout>
      <div className='signup__body d-flex flex-column'>
        <input
          type='text'
          placeholder='Enter OTP'
          className='form-control'
          value={otpState.otp}
          onChange={handleChange}
        />

        {otpErr && <small className='text-danger my-2'>{otpErr}</small>}
        <button
          onClick={ValidateOtp}
          className='btn btn-success mt-2'
          to='/validate'
          disabled={state.loading}
        >
          Confirm
        </button>
      </div>
    </Layout>
  )
}

export default ValidateOTP
