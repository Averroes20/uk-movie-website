import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import movie from './movie.js';

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    movie
  },
  plugins: [createPersistedState()], 
})
