<template lang="">
    <div>
        <ul>
            <!-- todoItems에 저장된 데이터 출력 / v-for의 내장 인덱스 사용 -->
            <li v-for="(todoItem,index) in this.todoItems " v-bind:key="todoItem.item" class="shadow">
                <i class="checkBtn fas fa-check"
                    v-bind:class="{checkBtnCompeleted:todoItem.complete}"
                    v-on:click="toggleComplete({todoItem,index})"></i>
                <span v-bind:class="{textCompleted:todoItem.complete}">{{todoItem.item}}</span>
                <span class="removeBtn" v-on:click="removeTodo({todoItem, index})">
                    <i class="fas fa-trash-alt"></i>
                </span>

            </li>
        </ul>
    </div>
</template>
<script>
import {mapGetters,mapMutations} from 'vuex';

export default {
    methods: {
        ...mapMutations({
            removeTodo:'removeOneItem',
            toggleComplete:'toggleOneItem'
        }),
    },
    computed:{
        ...mapGetters({
            todoItems:'storedTodoItems'
        })

    }
}
</script>
<style scoped>
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