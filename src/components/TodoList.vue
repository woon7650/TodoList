<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem.item" class="shadow">
        <!--todoItems에서 key를 이용해서 todoItem에 나열 -->
        <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted : todoItem.completed}" v-on:click="toggleComplete(todoItem)"></i>
        <span v-bind:class = "{textCompleted : todoItem.completed}">{{ todoItem.item }}</span>     
        <!--todoItem.completed가 false면 textCompleted x , true면 textCompleted o-->   
        <span class="removeBtn">
          <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
          <i class="fas fa-trash-alt" v-on:click="removeTodo(todoItem, index)"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data : function(){
    return {
      todoItems : []
    }
  },
  methods :{
    removeTodo : function(todoItem, index){
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);//splice():특정 index에서 하나 삭제 가능 & 기존 배열 변경
      //slice(): 특정 index를 삭제하고 기존 배열 변경 x
    },
    toggleComplete : function(todoItem){
      todoItem.completed = !todoItem.completed;
      localStorage.removeItem(todoItem.item);
      //해당 아이템을 지움
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
      //지운 아이템을 새로운 아이템으로 채움
      //localStorage의 값 변경
    }
  },
  created : function(){//instance가 생성되자마자 호출됨(created)
    if(localStorage.length > 0){
      for(var i = 0; i<localStorage.length; i++){
        //localStorage에서 data를 한번에 가져오는 api가 없음
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          //localStorage 안에 담기는 data만 담겠다는 뜻
          //this.todoItems.push(localStorage.key(i));
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
          //JSON.parse : 문자열을 다시 Object(객체)로 돌림
          //집어넣을 때는 JSON.stringify & 꺼낼 때는 JSON.parse
        }
      }
      
    }
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
</style>