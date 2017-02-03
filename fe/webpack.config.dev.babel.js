import webpack from 'webpack';
import path from 'path';
import WebpackConfig from 'webpack-config';

module.exports = new WebpackConfig().extend('./webpack.config.common.babel.js').merge({
  output: {
    pathinfo: true
  },
  debug: true,
  devtool: '#eval',
  entry: {
    bundle: path.join(__dirname,'/app/app.module.js'),
    vendor: ['angular','angular-ui-router'],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
  ],
  devServer: {
    proxy: {
      '/api': {target: 'http://localhost:3000'},
      '/proxy/seasonvar.ru': {
        target: 'http://seasonvar.ru',
        changeOrigin: true,
        pathRewrite: {'^/proxy/seasonvar.ru' : ''}
      },
      '/proxy/banker.ua': {
        target: 'http://banker.ua',
        changeOrigin: true,
        pathRewrite: {'^/proxy/banker.ua' : ''}
      }
    }
  }
});
