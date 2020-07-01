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
      <div
        className="polis"
        data-page_id="PAGE_ID"
        data-site_id="polis_site_id_fXsDvPcuW1QhMPz2oV"
      ></div>
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
    }
  }
`

export default ConversationsPage
