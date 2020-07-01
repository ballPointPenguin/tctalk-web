import React from "react"
import ReactMarkdown from "react-markdown"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import useScript from "../hooks/use-script"

const ConversationsPage = ({ data: { strapiConversations } }) => {
  useScript("https://pol.is/embed.js")
  return (
    <Layout>
      <SEO title={strapiConversations.title} />
      <h1>{strapiConversations.title}</h1>
      <h2>{strapiConversations.subtitle}</h2>
      {strapiConversations.content.map(contentblock => (
        <React.Fragment key={contentblock.id}>
          <ReactMarkdown source={contentblock.text} />
        </React.Fragment>
      ))}
      {strapiConversations.polis_conversations.map(({ polisId }) => (
        <div className="polis" data-conversation_id={polisId}></div>
      ))}
    </Layout>
  )
}

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
      polis_conversations {
        polisId
      }
    }
  }
`

export default ConversationsPage
