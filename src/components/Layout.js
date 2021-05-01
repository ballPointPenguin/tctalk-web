import PropTypes from 'prop-types'
import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => (
  <div id="layout">
    <Header />
    <div className="main">{children}</div>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
}

export default Layout
