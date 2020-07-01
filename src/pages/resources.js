import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ResourcesPage = ({ data: { strapiResources } }) => (
  <Layout>
    <SEO title={strapiResources.title} />
    <h1>{strapiResources.title}</h1>
    {strapiResources.content.map(contentblock => (
      <React.Fragment key={contentblock.id}>
        <p>{contentblock.text}</p>
      </React.Fragment>
    ))}
  </Layout>
)

export const query = graphql`
  query ResourcesPageQuery {
    strapiResources {
      createdAt
      strapiId
      title
      content {
        id
        text
      }
    }
  }
`

export default ResourcesPage
