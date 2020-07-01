require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Twin Cities Talk`,
    description: `Conversations about Community, Police, and Policy`,
    author: `Benjamin Rosas <hello@tctalk.us>`,
  },
  plugins: [
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#9fb4cc`,
        theme_color: `#5483b9`,
        display: `minimal-ui`,
        icon: `src/images/tc-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.API_URL || `http://localhost:1337`,
        queryLimit: 1000,
        singleTypes: [`home`, `about`],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
