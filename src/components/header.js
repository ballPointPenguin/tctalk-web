import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import tw from 'twin.macro'

const Header = ({ siteTitle }) => (
  <header>
    <div tw="text-center">
      <h3 tw="bg-purple-200 border-b border-indigo-400">
        <Link to="/">{siteTitle}</Link>
      </h3>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
