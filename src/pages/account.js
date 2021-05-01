import React from 'react'
import { Router } from '@gatsbyjs/reach-router'
import Layout from '../components/Layout'
import Profile from '../components/Profile'

const Account = () => (
  <Layout>
    <Router>
      <Profile path="/account/profile" />
    </Router>
  </Layout>
)

export default Account
