import PropTypes from 'prop-types'
import React from 'react'
import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => (
  <div id="layout">
    <Header />
    <div className="main">{children}</div>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.element,
}

export default Layout
