const path = require('path')
const factoryBabel = require('@lls/babel')
const env = process.env.NODE_ENV || 'development'

module.exports = factoryBabel({
  env,
  target: 'web',
  paths: { src: path.resolve('./src'), nodeModules: path.resolve('./node_modules') },
  opts: {
    useUniversal: false,
    useLoadable: false
  }
})
