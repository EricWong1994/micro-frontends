import Vue from 'vue'
import App from './App.vue'
import routes from './router';
import VueRouter from 'vue-router'
Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
if(window.__POWERED_BY_QIANKUN__){ // 如果是qiankun使用到了，则会动态注入路径
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
let instance = null;
let router = null;

function render(props = {}) {
  const { container } = props;
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/vue/' : '/',
    // base: window.__POWERED_BY_QIANKUN__ ? '/app-vue/' : '/',
    mode: 'history',
    routes
  });
  instance = new Vue({
    router,
    render: (h) => h(App),
  // }).$mount(container ? container.querySelector('#vue') : '#app');
  }).$mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}



export async function bootstrap() {
  console.log('react app bootstraped');
}

export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}