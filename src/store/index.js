import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import movie from './movie.js';

export default createStore({
  modules: {
    movie
  },
  plugins: [createPersistedState()], 
})
