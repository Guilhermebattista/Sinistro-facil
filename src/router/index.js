import { createRouter, createWebHashHistory } from 'vue-router';
import Login from '@/components/Login.vue';
import Register from '@/components/Register.vue';
import ForgotPassword from '@/components/ForgotPassword.vue'; 
import IncidentForm from '@/components/IncidentForm.vue';
import IncidentList from '@/components/IncidentList.vue';
import Profile from '@/components/Profile.vue';

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
    path: '/forgot-password', 
    name: 'ForgotPassword',
    component: ForgotPassword,
  },
  {
    path: '/incident-form',
    name: 'IncidentForm',
    component: IncidentForm,
  }, 
  {
    path: '/incident-list',
    name: 'IncidentList',
    component: IncidentList,
  
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;