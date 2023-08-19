import React from 'react'
import ReactDOM from 'react-dom/client'
import Profile from './components/profile/Profile'
// import Prueba from './components/prueba'
import Router from './routers/Router'


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Profile/>
  <Router/>
  </>
)
