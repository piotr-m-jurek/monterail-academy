import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import VueRouter from 'vue-router'

import App from './components/App'
import HabitList from './components/HabitList.vue'
import HabitEditor from './components/HabitEditor.vue'


Vue.use(VueMaterial)
Vue.use(VueRouter)

Vue.material.registerTheme({
  default: {
    primary: {
      color: 'light-green',
      hue: 700
    },
    accent: 'red'
  }
})

const routes = [
  { path: '/', component: HabitList },
  { path: '/habit', component: HabitEditor }
]

const router = new VueRouter({ routes })

new Vue({
  router,
  el: '#app',
  render: (h) => h(App)
}) 


