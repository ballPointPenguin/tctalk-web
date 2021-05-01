import './src/styles/global.css'
import React from 'react'
import { Auth0Provider } from '@auth0/auth0-react'
import { navigate } from 'gatsby'

const domain = process.env.AUTH0_DOMAIN
const clientId = process.env.AUTH0_CLIENT_ID

const onRedirectCallback = (appState) => {
  navigate(appState?.returnTo || '/', { replace: true })
}

export const wrapRootElement = ({ element }) => (
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    {element}
  </Auth0Provider>
)
