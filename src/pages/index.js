import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const HomePage = ({ data: { strapiHome } }) => (
  <Layout>
    <SEO title={strapiHome.title} />
    <h1>{strapiHome.title}</h1>
    <h2>{strapiHome.subtitle}</h2>
    {strapiHome.content.map(contentblock => (
      <React.Fragment key={contentblock.id}>
        <p>{contentblock.text}</p>
        <img
          src={contentblock.image.publicURL}
          alt={contentblock.imageAltText}
        />
      </React.Fragment>
    ))}
  </Layout>
)

export const query = graphql`
  query HomePageQuery {
    strapiHome {
      createdAt
      strapiId
      subtitle
      title
      content {
        id
        imageAltText
        text
        image {
          publicURL
        }
      }
    }
  }
`

export default HomePage
