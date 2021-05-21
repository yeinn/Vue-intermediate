<template>
  <div id="app">
   <TodoHeader></TodoHeader>
   <TodoInput></TodoInput>
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
      data(){
        return {
          todoItems: [],
        }
      },
      methods: {
        removeOneItem(todoItem,index){
          console.log(todoItem.item )
            //로컬스토리지 삭제 함수 removeItem
            localStorage.removeItem(todoItem.item);
            //js 배열 삭제 splice (특정인덱스,개수 삭제) / slice는 삭제된 새로운 배열 반환
            this.todoItems.splice(index,1);
        },
        toggleOneItem(todoItem,index){
           this.todoItems[index].complete=!this.todoItems[index].complete
            //로컬스토리지 해당 데이터 삭제 후 재 추가
            localStorage.removeItem(todoItem.item);
            localStorage.setItem(todoItem.item,JSON.stringify(todoItem))
        },
        clearAllItems(){
            //로컬스토리지 초기화 API
            localStorage.clear()
            this.todoItems=[]
        }

      },
  components:{
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
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
