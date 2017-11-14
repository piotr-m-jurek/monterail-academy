import Vue from 'vue'
import VueRouter from 'vue-router'
import './layout.css'

import App from './components/App'
import HabitList from './components/HabitList.vue'
import NewHabit from './components/NewHabit.vue'
import EditHabit from './components/EditHabit.vue'

import locale from 'element-ui/lib/locale/lang/en'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element, { locale })
Vue.use(VueRouter)

const routes = [
  { path: '/', component: HabitList, name: 'Home' },
  { path: '/edit/:id', component: EditHabit, name: 'Edit' },
  { path: '/new', component: NewHabit, name: 'New' },
  { path: '*', redirect: '/'}
]

const router = new VueRouter({
  routes,
  mode: 'history'
 })

new Vue({
  router,
  el: '#app',
  render: (h) => h(App)
}) 
