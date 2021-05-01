import PropTypes from 'prop-types'
import React from 'react'

const App = ({ children }) => <>{children}</>

App.propTypes = {
  children: PropTypes.element.isRequired,
}
