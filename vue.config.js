const ENV = process.env.NODE_ENV

module.exports = {
  publicPath: ENV === 'development' ? '' : '/resume-vue',
  // outputDir: 'vue_x6',
}
