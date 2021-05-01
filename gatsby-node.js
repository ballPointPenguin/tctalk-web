// DELETE THIS?
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  if (page.path.match(/^\/account/)) {
    createPage({
      ...page,
      matchPath: '/account/*',
    })
  }
}
