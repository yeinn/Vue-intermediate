<template lang="">
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
        <span class="addContainer" v-on:click="addTodo"><i class="fas fa-plus addBtn"></i></span>
    
        <Modal v-if="showModal" @close="showModal = false">
        <!-- 특정컴포넌트의 일부를 재사용 = slot -->
        <h3 slot="header">※ 경고
        <i class="closeModalBtn fas fa-times" @click="showModal=false"></i></h3>

        <div slot="body">빈 값은 추가할 수 없습니다.</div>

        <div slot="footer">copyright 2021 최예인</div>

         </Modal>
    
    </div>
</template>
<script>
import Modal from './common/Modal.vue'

export default {
    data(){
        return {
            newTodoItem:'',
            showModal: false
        }
    },
    methods:{
        addTodo(){
            if (this.newTodoItem!==''){
            //store의 mutation 동작
            // this.$emit('addTodoItem',this.newTodoItem)
            const text=this.newTodoItem.trim()
            this.$store.commit('addOneItem',text)
            this.clearInput()
            }
            else{
                this.showModal=!this.showModal
            }
        },
        clearInput(){
        //input 초기화
            this.newTodoItem=''
        }
    },
    components:{
        Modal
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
.closeModalBtn{
    color: #42b983;
}

    
</style>