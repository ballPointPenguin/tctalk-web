// DELETE THIS?
import React from 'react'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './App'

const clientId = process.env.AUTH0_CLIENT_ID

const Auth = () => (
  <Auth0Provider
    domain="tctalk.us.auth0.com"
    clientId={clientId}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
)

export default Auth
