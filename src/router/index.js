import { createRouter, createWebHistory } from "vue-router"
import AllContacts from '../views/AllContacts'
import NewContact from '../views/NewContact'
import UpdateContact from '../views/updateContact'

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
  },
  {
    path: `/updateContact/:id`,
    name: 'UpdateContact',
    component: UpdateContact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
