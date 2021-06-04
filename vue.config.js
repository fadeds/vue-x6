const ENV = process.env.NODE_ENV

module.exports = {
  publicPath: ENV === 'development' ? '' : '/vue-x6',
  // outputDir: 'vue_x6',
}
