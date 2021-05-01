import React from 'react'
import { Router } from '@gatsbyjs/reach-router'
import Home from './index'
import Layout from '../components/Layout'
import Login from './login'
import Privacy from './privacy'
import Profile from './profile'
import TOS from './tos'

const App = () => (
  <Layout>
    <Router basepath="/">
      <Profile path="/profile" />
      <Login path="/login" />
      <Home path="/" />
      <Privacy path="/privacy" />
      <TOS path="/tos" />
    </Router>
  </Layout>
)

export default App
