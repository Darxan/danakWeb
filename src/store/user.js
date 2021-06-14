import { axiosGet, axiosBase } from "@/store/axiosBase";

export default({
  state: {
    user: {
      userData: []
    }
  },
  getters: {
    getProfile(state) {
      return state.user.userData
    },
    getProjectInfo(state){
      return state.user.userCount
    } 
  },
  mutations: {
    UPDATE_DATA(state, payload){
      state.user.userData = payload
    },
    PROJECT_INFO(state, payload) {
      state.projectInfo = payload
    }
  },
  actions: {
   async getProjectInfo({commit}) {
      try {
        const token = localStorage.getItem('token')
        if (token) {
        const response = await axiosGet.get('api/project_info')
        commit('PROJECT_INFO', response.data)
        return response 
        }
      } 
      catch(e) {
        commit('SET_ERROR', e.message)
      }
    },
    async getProfiles({commit}) {
      try{
        const token = localStorage.getItem('token')
        if (token) {
          const response = await axiosGet.get('api/profile/')
          console.log("getProfiles -> response", response)
          commit('UPDATE_DATA', response.data)
          return response.data
        }
      }
      catch(e){
        commit('SET_ERROR', e.message);
        alert(e.message)
        
      }
    },
   
  }
})