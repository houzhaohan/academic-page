import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Publications from '../views/Publications.vue'
import Research from '../views/Research.vue'
import Contact from '../views/Contact.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/publications',
    name: 'Publications',
    component: Publications
  },
  {
    path: '/research',
    name: 'Research',
    component: Research
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
