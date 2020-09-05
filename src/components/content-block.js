import Img from 'gatsby-image'
import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import tw from 'twin.macro'

const ContentBlock = ({ content: { text, image } }) => {
  return (
    <>
      <ReactMarkdown source={text} tw="py-6" />
      {image && (
        <>
          <Img
            fluid={image.imageFile.childImageSharp.fluid}
            alt={image.alternativeText}
          />
          <p>{image.caption}</p>
        </>
      )}
    </>
  )
}

ContentBlock.propTypes = {
  content: PropTypes.exact({
    id: PropTypes.string,
    text: PropTypes.string,
    image: PropTypes.exact({
      alternativeText: PropTypes.string,
      caption: PropTypes.string,
      imageFile: PropTypes.object,
      url: PropTypes.string,
    }),
  }),
}

export default ContentBlock
