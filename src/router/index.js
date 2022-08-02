import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddProduk from "@/views/AddProduk.vue";
import DashBoard from "@/views/DashBoard";
// import PageNotFound from "@/views/PageNotFound";
import InboundPage from "@/views/InboundPage.vue";
import InventoryPage from '@/views/InventoryPage.vue'
import OrdersPage from '@/views/Orders-Page.vue'
import OutboundPage from '@/views/Outbound-Page.vue'
import ProductPage from '@/views/Product-Page.vue'
import trackingPage from '@/views/tracking-Page.vue'
import IntegrationS from '@/views/IntegrationsPage.vue'
import IntegrationAdd from '@/views/IntegrationAddPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/',
    name: 'DashBoard',
    component: DashBoard 
  },
  {
    path: '/produk/add',
    name: 'AddProduk',
    component: AddProduk
  },
  // {
  //   path: '/:patMatch(.*)*',
  //   name: 'PageNotFound',
  //   component: PageNotFound
  // },
  {
    path: '/inbound',
    name: 'InboundPage',
    component: InboundPage 
  },
  {
    path: '/inventory',
    name: 'InventoryPage',
    component:InventoryPage 
  },
  {
    path: '/orders',
    name: 'Orderspage',
    component: OrdersPage
  },
  {
    path: '/outbound',
    name: 'OutboundPage',
    component: OutboundPage
  },
  {
    path: '/produk',
    name: 'ProductPage',
    component: ProductPage
  },
  {
    path: '/tracking',
    name: 'trackingPage',
    component: trackingPage
  },
  {
    path: '/integrations',
    name: 'IntegrationS',
    component: IntegrationS
  },
  {
    path: '/integrations/add',
    name: 'IntegrationAdd',
    component: IntegrationAdd
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
