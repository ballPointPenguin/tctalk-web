import { Link, useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import tw from 'twin.macro'

const Header = ({ siteTitle }) => {
  const {
    strapi: { pages = [] },
  } = useStaticQuery(query)
  return (
    <header
      tw="bg-purple-200 border-b border-indigo-400 text-base sm:text-2xl
          flex flex-col sm:flex-row justify-around text-indigo-800"
    >
      <span>
        <Link to="/">{siteTitle}</Link>
      </span>
      {pages.map(page => (
        <span key={page.id}>
          <Link to={`/${page.slug}`}>{page.title}</Link>
        </span>
      ))}
    </header>
  )
}

export const query = graphql`
  query HeaderQuery {
    strapi {
      pages(where: { nav_menu: true }) {
        id
        slug
        title
      }
    }
  }
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Twin Cities Talk`,
}

export default Header
