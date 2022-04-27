import router from '@/router'
import db from '../data/db.json'

const state = {
  contacts: []
}

const getters = {
  allContacts: (state) => state.contacts.sort(function( a, b ) {
    if ( a.name.toLowerCase() < b.name.toLowerCase() ){
      return -1
    }
    if ( a.name.toLowerCase() > b.name.toLowerCase() ){
      return 1
    }
    return 0
  }),
}

const actions = {
  fetchContacts({ commit }) {
    commit('setContacts', db)
  },
  createNew({ commit }, newContact) {
    db.push(newContact)
    commit('newContact', db)
    router.push('/')
  },
  updateContact({ commit }, upd) {
    for (let c in state.contacts) {
      if (state.contacts[c].id == upd.id) {
        state.contacts[c] = upd
      }
    }
    commit('updContact', db)
    router.push('/')
  },
  deleteContact({commit}, id) {
    commit('removeContact', id)
  }
}

const mutations = {
  setContacts: (state, contacts) => (state.contacts = contacts),
  newContact: (state, contact) => (state.contacts, contact),
  updContact: (state, contact) => (state.contacts, contact),
  removeContact: (state, id) => state.contacts = state.contacts.filter(todo => todo.id !== id)
}

export default {
  state,
  getters,
  actions,
  mutations
}