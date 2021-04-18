require('dotenv').config({
  path: '.env',
})

console.log('$$$ TYPEKIT_ID !!!', process.env.TYPEKIT_ID)
module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
  ],
}
