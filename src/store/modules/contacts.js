import router from '@/router'
import db from '../data/db.json'

const state = {
  contacts: []
}

const getters = {
  allContacts: (state) => state.contacts,
}

const actions = {
  fetchContacts({ commit }) {
    commit('setContacts', db)
  },
  fetchSingleContact({commit}, id) {
    let singleContact = 'none'
    // console.log("Id: ", id)
    for (let contact of state.contacts) {
      if (contact.id === id) {
        singleContact = contact
      }
    }
    // console.log("sc:",singleContact)
    commit('singleContact', singleContact)
  },
  createNew({ commit }, name) {
    const contact = {
      id: Math.floor(Math.random()*1000000),
      name: name
    }
    db.push(contact)
    commit('newContact', db)
    router.push('/')
  },
  deleteContact({commit}, id) {
    commit('removeContact', id)
    // console.log(id);
  }
}

const mutations = {
  setContacts: (state, contacts) => (state.contacts = contacts),
  singleContact: (state, contact) => contact,
  newContact: (state, contact) => (state.contacts, contact),
  removeContact: (state, id) => state.contacts = state.contacts.filter(todo => todo.id !== id)
}

export default {
  state,
  getters,
  actions,
  mutations
}