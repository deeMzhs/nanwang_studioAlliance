// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import {Icon} from 'vant';
// import Axios from 'axios'
// import qs from 'qs'
import './assets/iconfont/iconfont.css'
import './assets/style/reset.css'
import './assets/style/border.css'

Vue.use(Vant, Icon);
// Vue.use(Axios) // 不可以这样引入，axios并不是vue插件
// Vue.prototype.$axios = Axios;  //在Vue的原型上添加$axios方法，这样在组件上可以无需封装直接this.$axios.get()使用
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
