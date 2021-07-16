<template>
  <div class="inputBox shadow">
      <input type = "text" v-model="newTodoItem" @keyup.enter="addTodo"><!--enterkey 입력시 addTodo 실행-->
      <!--<button v-on:click="addTodo">add</button>-->
      <span class="addContainer" v-on:click="addTodo">
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
        <i class="fas fa-plus addBtn"></i>
      </span>
      <modal v-if="showModal" @close="showModal = false">
        <!--
      you can use custom content here to overwrite
      default content
    -->
        <h3 slot="header">경고!<i class ="classModalBtn fas fa-times" v-on:click="showModal=false"></i></h3> <!--slot의 기능 : 등록된 Modal component를 재등록-->        
        <h3 slot="body">아무것도 입력하지 않으셨습니다.</h3>
      </modal>
  </div>
  
</template>


<script>
import Modal from './common/Modal.vue'//TodoInput에서 Modal component를 사용
export default {
    data(){
        return{
            newTodoItem : "",
            showModal : false
        }
    },
    methods : {
        addTodo(){
            if(this.newTodoItem !== ''){
              //this.$emit('addTodoItem',this.newTodoIt
              //하위에서 발생한 이벤트를 addTodoItem을 통해 상위 컴포넌트로 보냄
              this.$store.commit('addOneItem', this.newTodoItem);
              //commit : store.js에 있는 mutation 동작을 위해 사용

              this.clearInput();                
            }else{
              this.showModal = !this.showModal
            }            
        },
        clearInput(){
            this.newTodoItem = '';
        }
    },
    components :{
      Modal
    }    
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color : white;
  vertical-align: middle;
}
.closeModalBtn{
  color : #42b983

}
</style>