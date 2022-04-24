import Vuex from 'vuex'
import contacts from './modules/contacts'


const store = new Vuex.Store({
  modules: {
    contacts
  }
})

export default store