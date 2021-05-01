import React from 'react'
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'
import Layout from '../components/Layout'
import LogoutButton from '../components/LogoutButton'
const Profile = () => {
  const { user, isLoading } = useAuth0()

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Layout>
      <ul>
        <li>Name: {user.name}</li>
        <li>E-mail: {user.email}</li>
      </ul>
      <LogoutButton />
    </Layout>
  )
}

// Wrap the component in the withAuthenticationRequired handler
export default withAuthenticationRequired(Profile)
