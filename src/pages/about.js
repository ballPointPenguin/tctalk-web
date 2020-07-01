import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const AboutPage = ({ data: { strapiAbout }}) => (
<Layout>
  <SEO title="About" />
  <h1>{ strapiAbout.title }</h1>
  <h2>{ strapiAbout.subtitle }</h2>
  { strapiAbout.content.map(contentblock => (
    <>
      <p>{ contentblock.text }</p>
      <img src={contentblock.image.publicURL} alt={contentblock.image.alternativeText} />
    </>
  ))}
  <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    <Image />
  </div>
  <Link to="/">Go Home</Link>
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
        text
        image {
          alternativeText
          url
        }
      }
    }
  }
`

export default AboutPage
