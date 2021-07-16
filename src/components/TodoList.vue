<template>
  <div>
    <transition-group name="list" tag="p">
      <li v-for="(todoItem, index) in this.storedTodoItems" v-bind:key="todoItem.item" class="shadow">
        <!--todoItems에서 key를 이용해서 todoItem에 나열 -->
        <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted : todoItem.completed}" v-on:click="toggleComplete({todoItem, index})"></i>
        <span v-bind:class = "{textCompleted : todoItem.completed}">{{ todoItem.item }}</span>     
        <!--todoItem.completed가 false면 textCompleted x , true면 textCompleted o-->   
        <span class="removeBtn">
          <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
          <i class="fas fa-trash-alt" v-on:click="removeTodo({todoItem, index})"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  methods :{
    ...mapMutations({//인자 선언없이 암묵적으로 넘겨줌
      removeTodo: 'removeOneItem',//index, todoItem을 넘겨줌 & 받고 넘기는 인자의 개수는 같아야함
      //removeTodo : function(todoItem, index){
      //  this.$store.commit('removeOneItem', {todoItem, index});  
      toggleComplete: 'toggleComplete'
      //toggleComplete : function(todoItem, index){
      //this.$store.commit('toggleComplete', {todoItem, index})

    })
    
  },
  computed :{
    //todoItems(){
    //  return this.$store.getters.storedTodoItems;
    ...mapGetters(['storedTodoItems'])
    
  }
  
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}

/*리스트 아이템 트렌지션 효과*/
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>