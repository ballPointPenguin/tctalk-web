import { Global } from '@emotion/core'
import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import tw, { css, styled, theme } from 'twin.macro'
import Footer from './footer'
import Header from './header'

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
  ${tw`min-h-screen border-2 border-red-200 flex flex-col`}
  ${linearGradientStyle}
`

const MainContainer = styled.main`
  ${tw`container mx-auto flex-grow`}
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
        <MainContainer>{children}</MainContainer>
        <Footer />
      </Background>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
