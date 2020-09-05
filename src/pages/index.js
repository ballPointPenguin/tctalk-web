import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'

import ContentBlock from '../components/content-block'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Page = ({
  data: {
    strapi: {
      homePages: [homePage],
    },
  },
}) => (
  <Layout>
    <SEO title={homePage.title} />

    {homePage.content.map(content => (
      <ContentBlock content={content} key={content.id} />
    ))}
  </Layout>
)

export const query = graphql`
  query IndexPageQuery {
    strapi {
      homePages: pages(limit: 1, where: { slug: "home" }) {
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
      homePages: PropTypes.arrayOf(PropTypes.object).isRequired
    }),
  }),
}

export default Page
