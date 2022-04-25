import db from '../data/db.json'

const state = {
  contacts: []
}

const getters = {
  allContacts: (state) => state.contacts
}

const actions = {
  fetchContacts({ commit }) {
    commit('setContacts', db)
  },
  createNew({ commit }, name) {
    const contact = {
      id: Math.floor(Math.random()*1000000),
      name: name
    }
    db.push(contact)
    commit('newContact', db)
  }
}

const mutations = {
  setContacts: (state, contacts) => (state.contacts = contacts),
  newContact: (state, contact) => (state.contacts, contact)
}

export default {
  state,
  getters,
  actions,
  mutations
}