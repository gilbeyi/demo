import Vue from 'vue'
import VueRouter from 'vue-router'
import groups from '@/pages/groups/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    redirect: '/groups'
  },
  {
    path: '/groups',
    name: 'groups',
    component: groups
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
