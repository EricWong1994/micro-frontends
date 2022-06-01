const { name } = require('./package');

module.exports = {
  webpack: (config) => {
    // config.output.library = `${name}-[name]`;
    config.output.library = 'reactApp';
    config.output.libraryTarget = 'umd';
    // config.output.jsonpFunction = `webpackJsonp_${name}`;
    config.output.chunkLoadingGlobal = `webpackJsonp_${name}`;
    config.output.globalObject = 'window';

    return config;
  },

  devServer: (_) => {
    const config = _;

    config.headers = {
      'Access-Control-Allow-Origin': '*',
    };
    config.historyApiFallback = true;
    config.hot = false;
    // todo
    // options has an unknown property 'watchContentBase'. These properties are valid:
    // 默认情况下，静态资源的修改，是不会触发devServer的HMR，因为静态资源并不是一个模块
    // 所以可以设置watchContentBase的值为true，此时当静态资源发生更新的时候，
    // devServer会自动刷新对应的页面，从而更新界面
    // config.watchContentBase = false;
    // config.static = false;
    // config.static = true;
    config.liveReload = false;

    return config;
  },
};
