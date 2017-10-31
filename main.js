import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

import App from './components/App'

Vue.use(VueMaterial)

// Vue.material.registerTheme({
//   default: {
//     primary: {
//       color: 'light-green',
//       hue: 700
//     },
//     accent: 'red'
//   }
// })

new Vue({
  el: '#app',
  render: (h) => h(App)
}) 
