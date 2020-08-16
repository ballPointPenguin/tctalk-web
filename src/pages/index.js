import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'

import ContentBlock from '../components/content-block'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({
  data: {
    strapi: { home },
  },
}) => (
  <Layout>
    <SEO title={home.title} />
    <h1>{home.title}</h1>
    {home.content.map(block => (
      <ContentBlock block={block} key={block.id} />
    ))}
  </Layout>
)

export const query = graphql`
  query IndexPageQuery {
    strapi {
      home {
        title
        content {
          id
          text
          image {
            alternativeText
            caption
            url
          }
        }
      }
    }
  }
`

IndexPage.propTypes = {
  data: PropTypes.exact({
    strapi: PropTypes.exact({
      home: PropTypes.exact({
        title: PropTypes.string,
        content: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string,
          })
        ),
      }),
    }),
  }),
}

export default IndexPage
