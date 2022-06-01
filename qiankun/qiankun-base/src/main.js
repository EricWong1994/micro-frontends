import Vue from 'vue'
import {registerMicroApps, start} from 'qiankun';
import router from './router'
import App from './App.vue'

Vue.config.productionTip = false

registerMicroApps([
  {
    name: 'vueApp',
    // 子应用端口与主应用不一致
    entry: '//localhost:7100',
    // 下面这种方式不行
    // entry: '//localhost:7100/main.js',
    container: '#vue',
    activeRule: '/vue'
  },
  {
    name: 'reactApp',
    // 子应用端口与主应用不一致
    entry: '//localhost:3000',
    // 下面这种方式不行
    // entry: '//localhost:7100/main.js',
    container: '#react',
    activeRule: '/react'
  }
])

start();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
