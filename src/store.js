import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    getCounter (state) {
      return state.counter
    }
  },
  mutations: {
    addCounter (state, payload) {
      return state.counter++
    },
    subCounter (state, payload) {
      return (state.counter -= payload)
    }
  },
  actions: {
    asyncIncrement (context, payload) {
      return setTimeout(() => context.commit('addCounter'), payload.duration)
    }
  }
})

export default store
