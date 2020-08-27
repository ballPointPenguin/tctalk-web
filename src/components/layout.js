import { Global } from '@emotion/core'
import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import tw, { css, styled, theme } from 'twin.macro'

import Header from './header'
import './layout.css'

const globalStyles = {}

const linearGradientStyle = css`
  background: linear-gradient(
    ${theme`colors.purple.200`},
    ${theme`colors.blue.200`},
    ${theme`colors.yellow.100`},
    ${theme`colors.orange.100`}
  );
`

const Background = styled.div`
  ${tw`min-h-screen`}
  ${linearGradientStyle}
`

const MainContainer = styled.main`
  ${tw`container mx-auto`}
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Global styles={globalStyles} />
      <Background>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          <MainContainer>{children}</MainContainer>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </Background>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
