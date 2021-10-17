const commonConfig = require('./common.config')
const merge = require('merge')

const prodConfig = {
  mode: 'production'
}

module.exports = merge(commonConfig, prodConfig)