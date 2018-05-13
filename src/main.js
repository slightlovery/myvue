// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store.js'
import echarts from 'echarts'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'element-ui/lib/theme-chalk/index.css';
import {Table,Pagination,TableColumn} from 'element-ui'



Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.prototype.$echarts = echarts
Vue.use(Pagination)
Vue.use(Table)
Vue.use(TableColumn)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
