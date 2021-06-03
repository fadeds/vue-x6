const ENV = process.env.NODE_ENV

module.exports = {
  publicPath: ENV === 'development' ? '' : '/vue_x6',
  outputDir: 'docs',
}
