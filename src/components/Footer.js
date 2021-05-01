import React from 'react'

const Footer = () => (
  <footer id="footer">
    <span>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a
        href="https://www.gatsbyjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gatsby
      </a>
    </span>
    <span>
      Powered by {` `}
      <a href="https://aliencyb.org" target="_blank" rel="noopener noreferrer">
        AlienCyborg
      </a>
    </span>
  </footer>
)

export default Footer
