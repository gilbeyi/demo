import Vue from 'vue'
import VueRouter from 'vue-router'
import groups from '@/pages/group/list.vue'
import groupId from '@/pages/group/_id.vue'
import groupDetail from '@/pages/group/detail.vue'

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
    path: '/groups/:id',
    component: groupId,
    children: [
      {
        path: '',
        redirect: '/groups/:id/detail'
      },
      {
        path: 'detail',
        component: groupDetail
      }
    ]
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
