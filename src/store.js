import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store(
  {
    state : {
      count: 1
    },
    getters: {
      done : state => {
        return state.count;
      }
    },
    mutations: {
      increment (state , n){
        state.count += n;
      }
    },
    actions: {
      increment({commit} , n) {
        commit('increment' , n);
      }
    }
  }
)
