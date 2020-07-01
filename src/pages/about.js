import React from "react"
import ReactMarkdown from "react-markdown"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ data: { strapiAbout } }) => (
  <Layout>
    <SEO title={strapiAbout.title} />
    <h1>{strapiAbout.title}</h1>
    <h2>{strapiAbout.subtitle}</h2>
    {strapiAbout.content.map(contentblock => (
      <React.Fragment key={contentblock.id}>
        <ReactMarkdown source={contentblock.text} />
        <img
          src={contentblock.image.publicURL}
          alt={contentblock.imageAltText}
        />
      </React.Fragment>
    ))}
  </Layout>
)

export const query = graphql`
  query AboutPageQuery {
    strapiAbout {
      createdAt
      strapiId
      subtitle
      title
      content {
        id
        text
        image {
          publicURL
        }
      }
    }
  }
`

export default AboutPage
