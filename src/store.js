import Vue from 'vue';
import Vuex from 'vuex';
import userModule from './store/user'
import authenticationModule from './store/authentication'
import general from './store/general'

Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
            authenticationModule:authenticationModule,
            userModule: userModule,
            general:general
	}
})