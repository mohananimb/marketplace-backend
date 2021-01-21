import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import React from 'react'

import Home from './containers/Home/Home'
import Signup from './containers/SignUp/Signup'
import ValidateOTP from './containers/ValidateOTP/ValidateOTP'
import Dashboard from './containers/Dashboard/Dashboard'
import { Provider } from 'react-redux'
import configureStore from './store'
import UserDetails from './containers/UserDetails'
const store = configureStore()
function App () {
  let isLoggedIn = localStorage.getItem('qube_token')

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Signup} />
          <Route exact path='/user-details' component={UserDetails} />
          <Route exact path='/validate' component={ValidateOTP} />
          <Route
            exact
            path='/dashboard'
            component={props =>
              isLoggedIn ? <Dashboard {...props} /> : <Redirect to='/' />
            }
          />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
