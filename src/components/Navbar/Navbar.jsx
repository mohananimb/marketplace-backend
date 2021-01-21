import React from 'react'

function Navbar () {
  const handleLogout = () => {
    localStorage.clear()
    window.location.href = '/'
    // history.push('/')
  }
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container-fluid'>
        <span className='navbar-brand'>Qube Health</span>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>

        <button onClick={handleLogout} className='float-right btn text-white'>
          Logout
        </button>
      </div>
    </nav>
  )
}

export default Navbar
