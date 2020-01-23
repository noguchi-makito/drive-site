import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    message: '初期メッセージ'
  },

  getters:{
    //messageを使用するgetter
    message(state) {
      return state.message
    }
  },

  //mutations:コンポーネントでいうmethod（と言うかsetter）
  //stateを唯一変更できるもの
  mutations: {
    setMessage(state,payload){
      state.message = payload.message
    }
  },

  actions: {
    doUpdate({commit}, message){
      commit('setMessage',{message})
    }
  }
})
export default store
