import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import StartView from '../views/start.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'start',
    component: StartView
  }, {
    path: '/form',
    name: 'form',
    component: () => import(/* webpackChunkName: "form" */ '../views/form.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
