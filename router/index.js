import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import About from '../pages/about.vue';
import Contact from '../pages/contact.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact }, // ✅ เส้นทางไป Contact
  { path: '/service/:slug', component: ServiceDetail, props: true }
];

const router = createRouter({
  history: createWebHistory(), // ถ้ายังมีปัญหา ให้ใช้ createWebHashHistory()
  routes,
});

export default router;
