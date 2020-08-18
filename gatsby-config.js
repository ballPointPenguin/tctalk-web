module.exports = {
  siteMetadata: {
    title: `Twin Cities Talk`,
    description: `Conversations about Community, Police, and Policy`,
    author: `Benjamin Rosas <ben@aliencyb.org>`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `tctalk-web`,
        short_name: `tctalk`,
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
      resolve: `gatsby-source-graphql`,
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: 'STRAPI',
        // Field under which the remote schema will be accessible. You'll use
        // this in your Gatsby query.
        fieldName: 'strapi',
        // Url to query from
        url: `${process.env.API_URL || 'http://localhost:1337'}/graphql`,
      },
    },
    // {
    //   resolve: `gatsby-source-strapi`,
    //   options: {
    //     apiURL: process.env.API_URL || `http://localhost:1337`,
    //     //queryLimit: 100, // default is 100
    //     singleTypes: ["about", "articles", "conversation", "home", "resources"],
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
