import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    message: '初期メッセージ',
    kansou : "初期の感想"
  },

  getters:{
    //messageを使用するgetter
    message(state) {
      return state.message
    },
    kansou(state) {
      return state.kansou
    }
  },

  //mutations:コンポーネントでいうmethod（と言うかsetter）
  //stateを唯一変更できるもの
  mutations: {
    setMessage(state,payload){
      state.message = payload.message
    },
    setKansou(state,playload){
      state.kansou = playload.kansou
    }
  },

  actions: {
    doUpdate({commit}, message){
      commit('setMessage',{message})
    },
    inputKansou({commit}, kansou){
      commit("setKansou",{kansou})
    }
  }
})
export default store
