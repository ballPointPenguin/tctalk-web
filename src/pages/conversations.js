import React from "react"
import ReactMarkdown from "react-markdown"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ConversationsPage = ({ data: { strapiConversations } }) => (
  <Layout>
    <SEO title={strapiConversations.title} />
    <h1>{strapiConversations.title}</h1>
    <h2>{strapiConversations.subtitle}</h2>
    {strapiConversations.content.map(contentblock => (
      <React.Fragment key={contentblock.id}>
        <ReactMarkdown source={contentblock.text} />
      </React.Fragment>
    ))}
  </Layout>
)

export const query = graphql`
  query ConversationsPageQuery {
    strapiConversations {
      createdAt
      strapiId
      subtitle
      title
      content {
        id
        text
      }
    }
  }
`

export default ConversationsPage
