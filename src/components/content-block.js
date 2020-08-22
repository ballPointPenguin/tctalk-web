import Img from 'gatsby-image'
import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

const ContentBlock = ({ block: { text, image } }) => {
  return (
    <>
      <ReactMarkdown source={text} />
      {image?.imageFile && (
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
  block: PropTypes.exact({
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
