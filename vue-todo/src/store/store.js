import Vue from 'vue'
import Vuex from 'vuex'

// use: vuex를 전역으로 설정 
Vue.use(Vuex)

const storage = {
    //할일 목록 가져오기
    fetch(){
            const arr=[]
            //로컬 스토리지 값 담기
            if(localStorage.length>0){
                for (let i=0; i<localStorage.length; i++){
                    //로컬 스토리지의 기본 저장값 제외
                    if(localStorage.key(i)!=='loglevel:webpack-dev-server'){
                    //꺼내온 string type value를 json형태로 변환 
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
                }
            }
        }
        return arr;
    },
}

export const store = new Vuex.Store({
    state:{
        todoItems:storage.fetch()
    },
    mutations:{
        addOneItem(state,todoItem){
        //완료 여부 데이터 객체
          //하위 컴포넌트에서 받은 값 todoItem
          const obj={complete: false, item:todoItem}
          //this => 현재 vue인스턴스에 등록되어있는 this
          //저장 로직 수행 setItem 함수
          //JSON.stringify(obj) API => js객체를 스트링으로 변환
          localStorage.setItem(todoItem,JSON.stringify(obj));
          state.todoItems.push(obj);
        }
    }

})