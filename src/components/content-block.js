import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

function imgSrc({ image: { url } }) {
  console.log(process.env.API_URL)
  const imgsrc = process.env.API_URL + url
  console.log(imgsrc)
  return imgsrc
}

const ContentBlock = ({ block }) => (
  <>
    <ReactMarkdown source={block.text} />
    {block.image && (
      <>
        <img src={imgSrc(block)} alt={block.image.alternativeText} />
        <p>{block.image.caption}</p>
      </>
    )}
  </>
)

ContentBlock.propTypes = {
  block: PropTypes.exact({
    id: PropTypes.string,
    text: PropTypes.string,
    image: PropTypes.exact({
      alternativeText: PropTypes.string,
      caption: PropTypes.string,
      url: PropTypes.string,
    }),
  }),
}

export default ContentBlock
