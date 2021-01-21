import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import './home.css'
export default function Home ({ history }) {
  return (
    <Layout>
      <div>
        <div className='home__buttons'>
          <Link to='/signup'>
            <button className='btn btn-primary col-lg-12'>Sign Up</button>
          </Link>
          <Link to='/login'>
            <button className='btn btn-success col-lg-12 mt-5'>Sign In</button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}
