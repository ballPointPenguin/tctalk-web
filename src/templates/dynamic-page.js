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
    {page.content.map(content => (
      <ContentBlock content={content} key={content.id} />
    ))}
  </Layout>
)

export const query = graphql`
  query($slug: String!) {
    strapi {
      pages(limit: 1, where: { slug: $slug }) {
        title
        content {
          id
          text
          image {
            alternativeText
            caption
            url
            imageFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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