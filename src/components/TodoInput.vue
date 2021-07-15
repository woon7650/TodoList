<template>
  <div class="inputBox shadow">
      <input type = "text" v-model="newTodoItem" @keyup.enter="addTodo"><!--enterkey 입력시 addTodo 실행-->
      <!--<button v-on:click="addTodo">add</button>-->
      <span class="addContainer" v-on:click="addTodo">
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
        <i class="fas fa-plus addBtn"></i>
      </span>
  </div>
  
</template>


<script>
export default {
    data : function(){
        return{
            newTodoItem : ""
        }
    },
    methods : {
        addTodo : function(){
            if(this.newTodoItem !== ''){
              this.$emit('addTodoItem',this.newTodoItem);
              //하위에서 발생한 이벤트를 addTodoItem을 통해 상위 컴포넌트로 보냄
              this.clearInput();                
            }            
        },
        clearInput : function(){
            this.newTodoItem = '';
        }
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
</style>