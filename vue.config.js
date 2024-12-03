const ENV = process.env.NODE_ENV

module.exports = {
  publicPath: ENV === 'development' ? '' : './',
  // outputDir: 'vue_x6',
}
