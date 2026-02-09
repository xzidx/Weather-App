import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WarningView from '../views/WarningView.vue'
import RegionListView from '../views/RegionListView.vue'
import RegionDetailView from '../views/RegionDetailView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/help',
      name: 'help',
      component: () => import('../views/HelpView.vue'),
    },
    {
      path: '/warning',
      name: 'warning',
      component: () => import('../views/WarningView.vue'),
    },
     // This is your main "Regions" grid page (image 1)
    {
      path: '/water-temperatures',
      name: 'water-list',
      component: RegionListView,
    },
    // This is your "Specific Region" table page (image 2)
    {
      path: '/water-temperatures/:id',
      name: 'region-detail',
      component: RegionDetailView,
      props: true,
    },
  ],
})

export default router
