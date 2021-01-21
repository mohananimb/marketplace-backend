import React from 'react'
import './layout.css'

function Layout ({ children }) {
  return (
    <div className='container'>
      <div className='layout__body d-flex justify-content-center align-items-center'>
        {children}
      </div>
    </div>
  )
}

export default Layout
