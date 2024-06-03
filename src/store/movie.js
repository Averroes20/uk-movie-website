// store/modules/movies.js
import axios from 'axios';

const state = {
  data: [],
  loading: false,
  error: null,
  currentPage: 1,
  totalPages: null,
  detailData: null,
};

const mutations = {
  SET_DATA(state, data) {
    state.data = data.results;
    state.totalPages = data.total_pages;
  },
  SET_LOADING(state, status) {
    state.loading = status;
  },
  SET_ERROR(state, error) {
    state.error = error;
  },
  SET_CURRENT_PAGE(state, page) {
    state.currentPage = page;
  },
  SET_DETAIL_DATA(state, movie) {
    state.detailData = movie;
  },
};

const actions = {
  async fetchData({ commit, state }) {
    commit('SET_LOADING', true);
    commit('SET_ERROR', null);
    try {
      const response = await axios.get('https://api.themoviedb.org/3/trending/all/day', {
        params: {
          language: 'en-US',
          page: state.currentPage, // Use current page
        },
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiN2IyMDRkNjhhMWFkYjZiOTAwMTcyYWQ1ZWRiMWZmMSIsInN1YiI6IjY2NWMxZTE4NDk1NjM0MjVjMWM2ZTA0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RA3YLOViy0GHPxazGfi8AZWOg-o-1ZMEfasd3Cl4JYo'
        }
      });
      commit('SET_DATA', response.data);
    } catch (error) {
      commit('SET_ERROR', error);
    } finally {
      commit('SET_LOADING', false);
    }
  },
  setCurrentPage({ commit, dispatch }, page) {
    commit('SET_CURRENT_PAGE', page);
    dispatch('fetchData');
  },
};

const getters = {
  data: (state) => state.data,
  isLoading: (state) => state.loading,
  error: (state) => state.error,
  totalPages: (state) => state.totalPages,
  currentPage: (state) => state.currentPage,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
