
const merge = require('merge')
const commonConfig = require('./common.config')

const devConfig = {
  mode: 'development',
  devServer: {
    host: '0.0.0.0'
  }
}

module.exports = merge(commonConfig, devConfig)
