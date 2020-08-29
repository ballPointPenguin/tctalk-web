const path = require('path')
const { createRemoteFileNode } = require('gatsby-source-filesystem')
const apiUrl = process.env.API_URL || 'http://localhost:1337'

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      strapi {
        pages {
          slug
        }
      }
    }
  `)

  result.data.strapi.pages.forEach(({ slug }) => {
    createPage({
      path: slug,
      component: path.resolve(`./src/templates/dynamic-page.js`),
      context: {
        slug,
      },
    })
  })
}

exports.createResolvers = ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions
  createResolvers({
    STRAPI_UploadFile: {
      imageFile: {
        type: 'File',
        resolve({ url }) {
          if (url) {
            return createRemoteFileNode({
              url: apiUrl + url,
              store,
              cache,
              createNode,
              createNodeId,
              reporter,
            })
          }
        },
      },
    },
  })
}
