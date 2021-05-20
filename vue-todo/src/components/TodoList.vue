<template lang="">
    <div>
        <ul>
            <!-- todoItems에 저장된 데이터 출력 / v-for의 내장 인덱스 사용 -->
            <li v-for="todoItem,index in todoItems" v-bind:key="todoItem" class="shadow">
                {{todoItem}}
                <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
                    <i class="fas fa-trash-alt"></i>
                </span>

            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data: function(){
        return {
            todoItems:[]
        }
    },
    methods: {
        //리스트 삭제 메소드
        removeTodo: function(todoItem,index){
            //로컬스토리지 삭제 함수 removeItem
            localStorage.removeItem(todoItem);
            //js 배열 삭제 splice (특정인덱스,개수 삭제) / slice는 삭제된 새로운 배열 반환
            this.todoItems.splice(index,1);
        }
    },
    created: function(){
        //로컬 스토리지 값 담기
    if(localStorage.length>0){
        for (var i=0; i<localStorage.length; i++){
            //로컬 스토리지의 기본 저장값 제외
            if(localStorage.key(i)!=='loglevel:webpack-dev-server')
        this.todoItems.push(localStorage.key(i))
        }
    }
    }
}
</script>
<style lang="">
    ul{
        list-style-type: none ;
        padding-left: 0;
        margin-top: 0;
        text-align: left;
    }
    li{
        display: flex;
        min-height: 50px;
        height: 50px;
        line-height: 50px;
        margin: 0.5rem 0;
        padding: 0 0.9rem;
        background: white;
        border-radius: 5px;
    }
    .checkBtn{
        line-height: 45px;
        color: #62acde;
        margin-right: 5px;
    }
    .removeBtn{
        margin-left:auto;
        color:#de4343;
    }
    .checkBtnCompeleted{
        color: #b3adad;
    }
    .textCompleted{
        text-decoration: line-through;
        color: #b3adad;
    }
    
</style>