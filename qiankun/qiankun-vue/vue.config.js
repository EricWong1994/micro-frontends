const { defineConfig } = require('@vue/cli-service')
const packageName = require('./package.json').name;

module.exports = defineConfig({
  devServer: {
    port: 7100,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  // transpileDependencies: true,
  configureWebpack: {
    output: {
      // library: `${packageName}-[name]`,
      library: 'vueApp',
      libraryTarget: 'umd',
      // jsonpFunction: `webpackJsonp_${packageName}`,
    }
  },
  lintOnSave:false
})