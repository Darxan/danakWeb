  
import {axiosBase, ApiService }  from './axiosBase'
export default ({
  state: {
    user: {
      isAuthenticated: localStorage.getItem('_uidt') ? true : false,
      token: localStorage.getItem('_uidt') || null,
    },
  },
  getters: {
    loggedIn: (state) => state.user.token,
    isUserAuthenticated: (state) => !!state.user.token,
    isStateUser: (state) => state.user
  },
  mutations: {
    updateLocalStorage(state, payload) {
      localStorage.setItem('_uidt', payload)
      state.user.token = payload
      state.user.isAuthenticated = true;
    },
    updateAccess(state, payload) {
      state.user.token = payload
    },
    GOOGLE_AUTH(state, payload) {
      state.user.token = payload
      state.user.isAuthenticated = true
    },
    SET_USER(state, payload) {
      state.user.isAuthenticated = true;
      state.user.token = payload;
    },
    UNSET_USER(state) {
      state.user = {
        isAuthenticated: null,
        token: null
      }
    },
    destroyToken(state) {
      state.user.token = null,
      state.user.isAuthenticated = false
    }
  },
  actions: {
    registerUser({commit}, data) {
      return new Promise((resolve, reject) => {
        axiosBase.post('/auth/users/', data)
          .then(response => {
            resolve(response)
          })  
          .catch(error => {
            reject(error)
          })
      })
    },
    async logoutUser({commit, getters}) {
      if (getters.loggedIn) {
          axiosBase.post('/auth/token/logout')
          localStorage.removeItem('_uidt')
          commit('destroyToken')
          commit('getProfile', null)
      }
    },
    loginUser({commit, dispatch}, payload) {
      return new Promise((resolve, reject) => {
        axiosBase.post('/rest-auth/login/', payload)
          .then(response => {
            const data = response.data.key;
            commit('updateLocalStorage', response.data.key)
            // dispatch('getProfiles')
            resolve(response)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    googleAuth({ commit, dispatch }, payload) {
      return new Promise((resolve, reject) => {
        axiosBase.post('/user/google/', payload)
          .then(response => {
            console.log("response", response)
            commit('updateLocalStorage', response.data.key)
            resolve(response)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    facebookAuth({ commit, dispatch }, payload) {
      return new Promise((resolve, reject) => {
        axiosBase.post('/user/facebook/', payload)
          .then(response => {
            console.log("response", response)
            commit('updateLocalStorage', response.data.key)
            resolve(response)
          })
          .catch(err => {
            reject(err)
            commit('SET_ERROR', err.message)
          })
      })
    },
    async forgetPass({commit}, payload){
      try{
        const response = await axiosBase.post('auth/users/reset_password/', payload)
        console.log("forgetPass -> response", response)
        return response
      }
      catch(e) {
        console.log("forgetPass -> e", e)
        commit('SET_ERROR', e.message)
        return e
      }
    },
    setUser({
      commit
    }, payload) {
      commit('SET_USER', payload)
    }
  }
})