import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Money from '@/views/Money.vue';
import Labels from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';
import NotFound from '@/views/NotFound.vue';
import EditLabel from '@/views/EditLabel.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/money'   //把根路径重定向到路径/money
  },
  {
    path:'/money',
    component:Money
  },
  {
    path:'/labels',
    component: Labels
  },
  {
    path:'/statistics',
    component: Statistics
  },
  {
    path: '/labels/edit/:id',
    component: EditLabel
  },
  {
    path:'*',                //输入路径之后，每次都是从最上面的路径依次向下找有没有和输入的路径一样的。如果上面的都不是，那输入的路径就属于*（除去上面后的所有的路径）
    component: NotFound
  }
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
