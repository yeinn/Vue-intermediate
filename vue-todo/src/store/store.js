import Vue from 'vue'
import Vuex from 'vuex'
import todoApp from './modules/todoApp'

// use: vuex를 전역으로 설정 
Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        todoApp
    }
})