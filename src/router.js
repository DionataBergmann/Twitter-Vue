import Vue from 'vue'
import VueRouter from 'vue-router'


import FormLogin from './components/FormLogin'
import pag1 from './components/PagInicial'
// import Sidebar from './components/Sidebar'



Vue.use(VueRouter)

const routes = [
 
  { path: '/login', component: FormLogin },
  { path: '/pag1', component: pag1 },
  // { path: '/sidebar', component: Sidebar }


]

export default new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})
