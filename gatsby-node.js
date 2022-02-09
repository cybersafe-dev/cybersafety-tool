exports.onCreateWebpackConfig = ({ stage, loaders, actions, getConfig }) => {
  if (getConfig().mode === 'production') {
    actions.setWebpackConfig({
      devtool: false
    });
  }
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-timer-hook/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*"
    createPage(page)
  }
}
