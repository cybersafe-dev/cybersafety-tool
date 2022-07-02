exports.onCreateWebpackConfig = ({
  stage,
  loaders,
  actions,
  plugins,
  getConfig,
}) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        process: require.resolve("process/browser"),
        zlib: require.resolve("browserify-zlib"),
        stream: require.resolve("stream-browserify"),
        util: require.resolve("util/"),
        assert: require.resolve("assert/"),
        buffer: require.resolve("buffer/"),
      },
    },
    plugins: [
      plugins.provide({
        Buffer: ["buffer", "Buffer"],
        process: "process/browser",
      }),
    ],
    module: {
      rules: [
        {
          test: /safer-buffer/,
          use: loaders.null(),
        },
      ],
    },
  })

  if (getConfig().mode === "production") {
    actions.setWebpackConfig({
      devtool: false,
    })
  }
  if (stage === "build-javascript" || stage === "develop") {
    actions.setWebpackConfig({
      plugins: [plugins.provide({ process: "process/browser" })],
    })
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
