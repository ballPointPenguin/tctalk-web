import React from 'react'
import tw from 'twin.macro'

const Footer = () => (
  <footer tw="border-t border-indigo-400 bg-yellow-300 bottom-0 w-full text-right flex flex-col sm:flex-row py-1 justify-end">
    <span tw="mx-4">
      © {new Date().getFullYear()}, Built with
      {` `}
      <a
        href="https://www.gatsbyjs.org"
        target="_blank"
        rel="noopener noreferrer"
        tw="text-indigo-700"
      >
        Gatsby
      </a>
    </span>
    <span tw="mx-4">
      Powered by {` `}
      <a
        href="https://aliencyb.org"
        target="_blank"
        rel="noopener noreferrer"
        tw="text-indigo-700"
      >
        AlienCyborg
      </a>
    </span>
  </footer>
)

export default Footer
