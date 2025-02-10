import { createRouter, createWebHashHistory } from 'vue-router';
import Login from '@/components/Login.vue';
import Register from '@/components/Register.vue';
import ForgotPassword from '@/components/ForgotPassword.vue'; 

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/forgot-password', // Nova rota para recuperação de senha
    name: 'ForgotPassword',
    component: ForgotPassword,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;