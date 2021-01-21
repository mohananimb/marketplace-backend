import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import './signup.css'
import { useDispatch, useSelector } from 'react-redux'
import { phone, sendOTP as otp } from './constants'

function Signup (props) {
  const [phoneErr, setPhoneErr] = useState('')
  const state = useSelector(state => state.setPhone)
  const otpState = useSelector(state => state.sendPin)
  const dispatch = useDispatch()

  const sendOTP = async () => {
    const match = state.phone.match(/^[0-9]{10}$/g)

    if (match) {
      dispatch({
        type: otp.loading,
        number: state.phone
      })
      props.history.push('/validate')
    } else {
      setPhoneErr('Enter valid phone')
    }
  }

  const handleChange = e => {
    setPhoneErr('')
    dispatch({
      type: phone.adding,
      payload: e.target.value
    })
  }

  return (
    <Layout>
      <div className='signup__body d-flex flex-column'>
        <div className='d-flex'>
          <input
            type='text'
            className='form-control country__code'
            readOnly
            defaultValue='+91'
          />
          <input
            type='text'
            placeholder='Enter your phone number'
            className='form-control'
            value={state.phone}
            onChange={handleChange}
          />
        </div>
        {phoneErr && <small className='text-danger mt-2'>{phoneErr}</small>}
        <button
          onClick={sendOTP}
          className='btn btn-success mt-2'
          to='/validate'
          disabled={otpState.loading}
        >
          Send OTP
        </button>
      </div>
    </Layout>
  )
}

export default Signup
