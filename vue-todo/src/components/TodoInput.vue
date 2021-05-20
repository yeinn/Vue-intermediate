<template lang="">
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
        <span class="addContainer" v-on:click="addTodo"><i class="fas fa-plus addBtn"></i></span>
    </div>
</template>
<script>
export default {
    data: function(){
        return {
            newTodoItem:""
        }
    },
    methods:{
        addTodo:function(){
            if (newTodoItem!=''){
            //완료 여부 데이터 객체
            var obj={complete: false, item:this.newTodoItem}

            //this => 현재 vue인스턴스에 등록되어있는 this
            //저장 로직 수행 setItem 함수
            //JSON.stringify(obj) API => js객체를 스트링으로 변환
            localStorage.setItem(this.newTodoItem,JSON.stringify(obj));
            this.clearInput()
            }
        },
        clearInput:function(){
        //input 초기화
            this.newTodoItem=''
        }
    }
}
</script>
<style scoped>
input:focus{
    outline: none;
}

.inputBox{
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}
.inputBox input{
    border-style: none;
    font-size: 0.9rem;
}
.addContainer{
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}
.addBtn{
    color: white;
    vertical-align: middle;
    cursor: pointer;
}

    
</style>