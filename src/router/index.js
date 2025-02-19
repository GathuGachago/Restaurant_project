import { createRouter, createWebHistory } from 'vue-router'
import Home_page from '@/components/Home_page.vue'
import About from '@/components/About.vue'
import Contact from '@/components/Contact.vue'
import Booking from '@/components/Booking.vue'
import Feedback from '@/components/Feed_back.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import Menu from '@/components/Menu.vue'
import Order from '@/components/Order.vue'
import RestaurantList from '@/components/RestaurantList.vue'

//route array of objects : path, component
const routes = [
  {
    path:'/',
    component: Home_page
  },

  {
    path:'/about',
    component: About
  },
  
  {
    path:'/booking',
    component: Booking
  },

  {
    path:'/contact',
    component: Contact
  },

  {
    path:'/feedback',
    component: Feedback
  },

  {
    path:'/helloworld',
    component: HelloWorld
  },

  {
    path:'/menu',
    component: Menu
  },

  {
    path:'/order',
    component: Order
  },

  {
    path:'/restaurantlist',
    component: RestaurantList
  },
]
const router = createRouter({
  history: createWebHistory( ),
  routes: routes,
})

export default router