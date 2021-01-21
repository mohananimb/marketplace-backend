import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../../components/Layout/Layout'
import * as actions from './actions'
function UserDetails ({ history }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const dispatch = useDispatch()
  const state = useSelector(state => state.user)
  const phoneState = useSelector(state => state.setPhone)

  const handleUser = async () => {
    const userData = {
      name,
      email,
      mobile: phoneState.phone
    }

    dispatch(actions.loading(userData))
  }

  useEffect(() => {
    if (!phoneState.phone) {
      window.location.href = '/'
    }
    if (state.success) {
      if (state.data.message === 'This email is already registered.') {
        alert('This email is already taken.')
      } else if (state.data.message === 'User created successfully.') {
        alert('Signed up successfully, you can login now.')

        window.location.href = '/login'
      }
    }
  }, [state, history, phoneState])
  return (
    <Layout>
      <div className='signup__body d-flex flex-column'>
        <div className=''>
          <input
            type='text'
            placeholder='Enter your name'
            className='form-control mb-3'
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type='email'
            className='form-control '
            placeholder='Enter Your Email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <button
          onClick={handleUser}
          className='btn btn-success mt-2'
          to='/validate'
          disabled={state.loading}
        >
          Submit
        </button>
      </div>
    </Layout>
  )
}

export default UserDetails
