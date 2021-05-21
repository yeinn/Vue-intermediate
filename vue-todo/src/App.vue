<template>
  <div id="app">
   <TodoHeader></TodoHeader>
   <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
   <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"></TodoList>
   <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
      data: function(){
        return {
          todoItems: [],
        }
      },
      methods: {
        addOneItem: function(todoItem){
          //완료 여부 데이터 객체
          //하위 컴포넌트에서 받은 값 todoItem
            const obj={complete: false, item:todoItem}
            //this => 현재 vue인스턴스에 등록되어있는 this
            //저장 로직 수행 setItem 함수
            //JSON.stringify(obj) API => js객체를 스트링으로 변환
            localStorage.setItem(todoItem,JSON.stringify(obj));
            this.todoItems.push(obj);
        },
        removeOneItem: function(todoItem,index){
          console.log(todoItem.item )
            //로컬스토리지 삭제 함수 removeItem
            localStorage.removeItem(todoItem.item);
            //js 배열 삭제 splice (특정인덱스,개수 삭제) / slice는 삭제된 새로운 배열 반환
            this.todoItems.splice(index,1);
        },
        toggleOneItem:function(todoItem,index){
           this.todoItems[index].complete=!this.todoItems[index].complete
            //로컬스토리지 해당 데이터 삭제 후 재 추가
            localStorage.removeItem(todoItem.item);
            localStorage.setItem(todoItem.item,JSON.stringify(todoItem))
        },
        clearAllItems: function(){
            //로컬스토리지 초기화 API
            localStorage.clear()
            this.todoItems=[]
        }

      },
     created: function(){
        //로컬 스토리지 값 담기
        if(localStorage.length>0){
            for (let i=0; i<localStorage.length; i++){
                //로컬 스토리지의 기본 저장값 제외
                if(localStorage.key(i)!=='loglevel:webpack-dev-server')
                //꺼내온 string type value를 json형태로 변환 
                this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
            }
        }
    },
  components:{
    'TodoHeader':TodoHeader,
    'TodoInput':TodoInput,
    'TodoList':TodoList,
    'TodoFooter':TodoFooter
    }
}
</script>

<style>
body{
  text-align: center;
  background-color: #f6f6f6;
}
input{
  border-style: groove;
  width: 200px;
}
button{
  border-style: groove;
}
.shadow{
  box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
}
</style>
