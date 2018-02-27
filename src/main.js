import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
// 添加vuex
//import store from './store'
//引入vueaxios
import axios from 'axios'
// 解决移动端300毫秒延迟问题
import fastclick from 'fastclick'
// 引入图片懒加载插件
import VueLazyLoad from 'vue-lazyload'
// 调试
/* eslint-disable no-unused-vars */
// import VConsole from 'vconsole'

 // var vConsole = new VConsole();
fastclick.attach(document.body)
// 关闭生产模式下给出的提示
Vue.config.productionTip = false

// import mobShare from 'mobShare'
// 引入公共CSS样式
import './common/css/reset.css'
// import './common/css/style.css'
import './common/css/base.css'
Vue.use(VueLazyLoad,{
	error: require('./common/image/logo.png'),
	loading:require('./common/image/logo.png')
})

Vue.prototype.$setgoindex = function () {
  if (window.history.length <= 1) {
    if (location.href.indexOf('?') === -1) {
      window.location.href = location.href + '?goindex=true'
    } else if (location.href.indexOf('?') !== -1 && location.href.indexOf('goindex') === -1) {
      window.location.href = location.href + '&goindex=true'
    }

  }
}

//注册全局axios
Vue.prototype.$ajax = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
//store,
  router,
  // vConsole,
  render: h => h(App)
})
