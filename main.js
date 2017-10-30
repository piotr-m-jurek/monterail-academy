import Vue from 'vue'
import Element from 'element-ui'
import App from './App'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)

new Vue({
  el: '#app',
  render: (h) => h(App)
}) 
