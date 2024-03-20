import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginPage from '@/views/LoginPage.vue'; // Assuming you have a LoginPage.vue component in your views folder

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/login' // Redirect to login page by default
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  // Other routes for your application, such as the shopping cart page, etc.
];

const router = new VueRouter({
  mode: 'history', // Use history mode for cleaner URLs
  base: process.env.BASE_URL,
  routes
});

export default router;
