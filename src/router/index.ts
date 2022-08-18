import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import StartView from '../views/start.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'start',
    component: StartView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
