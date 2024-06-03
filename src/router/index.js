import { createRouter, createWebHistory } from 'vue-router'
import MovieDetail from '../components/content/MovieDetail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/trending',
    name: 'trendingview',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/TrendingView.vue')
  },
  {
    path: "/movie/:id",
    name: "MovieDetail",
    component: MovieDetail,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
