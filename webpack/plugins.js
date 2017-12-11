const argv = require('minimist')(process.argv.slice(2));
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

const pkg = require('../package.json');

const isProduction = !!((argv.env && argv.env.production) || argv.p);

/**
 * Common plugins
 * @type {*[]}
 */
const commonPlugins = [
  new HtmlWebpackPlugin({
    inject: 'body',
    template: path.resolve(__dirname, '../src/index.html'),
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: isProduction,
    debug: !isProduction,
    stats: {colors: true},
    eslint: {
      configFile: path.resolve(__dirname, '../.eslintrc'),
      failOnWarning: false,
      failOnError: true,
    },
  }),
  new ImageminPlugin({
    disable: false,
    optipng: {
      optimizationLevel: 7,
    },
    gifsicle: {
      optimizationLevel: 3,
    },
    pngquant: {
      quality: '65-90',
      speed: 4,
    },
    svgo: {
      removeUnknownsAndDefaults: false,
      cleanupIDs: false,
    },
    jpegtran: null,
    plugins: [imageminMozjpeg({
      quality: 75,
    })]
  }),
  new ExtractTextPlugin({
    filename: 'styles/[name].[hash].css',
    allChunks: true,
  }),
];

/**
 * Develop plugins
 * @type {Array.<*>}
 */
const developPlugins = [
  new DashboardPlugin(),
  new webpack.NamedModulesPlugin(),
  new WebpackNotifierPlugin({
    title: pkg.name,
    contentImage: path.join(__dirname, '../src/assets/images/logo.png')
  }),
  new BrowserSyncPlugin(
    {
      host: 'localhost',
      port: pkg.config.port,
      // Proxy the default webpack dev-server port
      proxy: 'http://localhost:8080/',
      notify: false,
      open: false,
      // Let webpack handle the reload
      codeSync: false
    }
  ),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
];

/**
 * Production plugins
 * @type {Array.<*>}
 */
const productionPLugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),
  new WebpackCleanupPlugin(),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      drop_console: true,
      warnings: false
    }
  }),
  new OptimizeCssAssetsPlugin({
    cssProcessorOptions: {
      discardComments: {
        removeAll: true
      }
    }
  }),
];

module.exports = {
  develop: commonPlugins.concat(developPlugins),
  production: commonPlugins.concat(productionPLugins)
};
