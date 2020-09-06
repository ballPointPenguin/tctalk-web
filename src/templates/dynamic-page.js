import PropTypes from 'prop-types'
import React from 'react'
import { graphql } from 'gatsby'

import ContentBlock from '../components/content-block'
import Layout from '../components/layout'
import SEO from '../components/seo'
import useScript from '../hooks/use-script'

const Page = ({
  data: {
    strapi: {
      pages: [page = {}],
    },
  },
}) => {
  useScript('https://pol.is/embed.js')

  const { conversations = [] } = page

  return (
    <Layout>
      <SEO title={page.title} />

      {page.content.map(content => (
        <ContentBlock content={content} key={content.id} />
      ))}
      {conversations.map(({ name, polisId }) => (
        <>
          <h3>{name}</h3>
          <div
            className="polis"
            data-conversation_id={polisId}
            key={polisId}
          ></div>
        </>
      ))}
    </Layout>
  )
}

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
        conversations: polis_conversations {
          name
          polisId
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
