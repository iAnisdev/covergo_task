import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import StartView from '../views/startView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'start',
    component: StartView
  }, {
    path: '/form',
    name: 'form',
    component: () => import(/* webpackChunkName: "form-chunk" */ '../views/formView.vue')
  }, {
    path: '/summary',
    name: 'summary',
    component: () => import(/* webpackChunkName: "summary-chunk" */ '../views/summaryView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
