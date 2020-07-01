import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const HomePage = ({ data: { strapiHome }}) => (
<Layout>
  <SEO title="Home" />
  <h1>{ strapiHome.title }</h1>
  <h2>{ strapiHome.subtitle }</h2>
  { strapiHome.content.map(contentblock => (
    <>
      <p>{ contentblock.text }</p>
      <img src={contentblock.image.publicURL} alt={contentblock.image.alternativeText} />
    </>
  ))}
  <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    <Image />
  </div>
  <Link to="/about/">Go to About</Link>
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
        text
        image {
          alternativeText
          url
        }
      }
    }
  }
`

export default HomePage
