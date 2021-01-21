import React from 'react'
import { Redirect, Route } from 'react-router-dom'

function Protected ({ Component, path }) {
  let isLoggedIn = localStorage.getItem('qube_token')
  return (
    <Route
      exact
      path={path}
      render={props => {
        if (isLoggedIn) {
          return <Component />
        }
        return <Redirect to='/' />
      }}
    />
  )
}

export default Protected
