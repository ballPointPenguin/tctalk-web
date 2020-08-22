const { createRemoteFileNode } = require('gatsby-source-filesystem')
const apiUrl = process.env.API_URL || 'http://localhost:1337'

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
