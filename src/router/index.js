import { createRouter, createWebHistory } from 'vue-router'

//define routes
const routes = [
  
  {
    path: '/',
    name: 'transaction.index',
    component: () => import('../views/transaction/Index.vue')
  },
  {
    path: '/create',
    name: 'transaction.create',
    component: () => import('../views/transaction/Create.vue')
  },
  {
    path: '/edit/:id',
    name: 'transaction.edit',
    component: () => import('../views/transaction/Edit.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes //config routes
});

export default router