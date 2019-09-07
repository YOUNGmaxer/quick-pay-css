const path = require('path');
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/quick-pay-css'
    : '/';
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('Components', resolve('src/components'))
      .set('Assets', resolve('src/assets'))
      .set('Views', resolve('src/views'))
  }
}