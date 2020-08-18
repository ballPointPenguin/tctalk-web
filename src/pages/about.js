import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'

import ContentBlock from '../components/content-block'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Page = ({
  data: {
    strapi: {
      pages: [page = {}],
    },
  },
}) => (
  <Layout>
    <SEO title={page.title} />
    {page.content.map(block => (
      <ContentBlock block={block} key={block.id} />
    ))}
  </Layout>
)

export const query = graphql`
  query AboutPageQuery {
    strapi {
      pages(limit: 1, where: { title: "about" }) {
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

Page.propTypes = {
  data: PropTypes.exact({
    strapi: PropTypes.exact({
      pages: PropTypes.arrayOf(PropTypes.object).isRequired,
    }),
  }),
}

export default Page
