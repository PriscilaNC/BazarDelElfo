import { createRouter, createWebHashHistory } from 'vue-router';


import LandingPage from './pages/LandingPage';
import MarketPlace from './pages/MarketPlace';
import ProductDetail from './pages/ProductDetail';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminPage from './pages/AdminPage';

const routes = [

  {
    name: 'landing_page',
    path: '/landing_page',
    component: LandingPage
  },

  {
    name: 'marketplace',
    path: '/marketplace',
    component: MarketPlace
  },
  {
    name: 'product_detail',
    path: '/product_detail',
    component: ProductDetail
  },
  {
    name: 'login_page',
    path: '/login_page',
    component: LoginPage
  },
  {
    name: 'register_page',
    path: '/register_page',
    component: RegisterPage
  },
  {
    name: 'admin_page',
    path: '/admin_page',
    component: AdminPage
  }
 
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;