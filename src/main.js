import Vue from 'vue';
import Vuex from 'vuex'
import App from './App';

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-carbon.css' // 使用 carbon 主题
Vue.use(MuseUI)

import store from './store/store'
import router from './router/router'

//全局过滤器
Vue.filter('arr2string', value => value.join(' / '));
Vue.filter('fixNum', num => (num ? (Number(num).toFixed(1)) : '暂无评分'));

var vm = new Vue({
  el: '#app',
  template: '<App/>',
  router,
  store,
  components: {
    App
  }
})
