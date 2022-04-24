import { createRouter, createWebHistory } from "vue-router"
import AllContacts from '../views/AllContacts'
import NewContact from '../views/NewContact'

const routes = [
  {
    path: '/',
    name: 'AllContacts',
    component: AllContacts
  },
  {
    path: '/newContact',
    name: 'NewContact',
    component: NewContact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
