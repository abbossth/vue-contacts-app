
const state = {
  contacts: [
    {
      id: 1,
      name: 'John'
    },
    {
      id: 2,
      name: 'Lucy'
    },
    {
      id: 3,
      name: 'Sam'
    }
  ]
}

const getters = {
  allContacts: (state) => state.contacts
}

const actions = {}

const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations
}