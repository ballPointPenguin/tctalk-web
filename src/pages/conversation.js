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

  const {
    title,
    content = [],
    polis_conversations: polisConversations = [],
  } = page

  return (
    <Layout>
      <SEO title={title} />
      {content.map(block => (
        <ContentBlock block={block} key={block.id} />
      ))}

      {polisConversations.map(({ id, polisId }) => (
        <div className="polis" data-conversation_id={polisId} key={id}></div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query ConversationPageQuery {
    strapi {
      pages(limit: 1, where: { title: "conversation" }) {
        title
        polis_conversations {
          id
          polisId
        }
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
      pages: PropTypes.arrayOf(
        PropTypes.exact({
          title: PropTypes.string,
          polis_conversations: PropTypes.array,
          content: PropTypes.array,
        })
      ).isRequired,
    }),
  }),
}

export default Page
