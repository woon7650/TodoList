<template>
  <div id="app">
    <TodoHeader></TodoHeader>    
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
  
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'


export default {
  /*
  
  data(){
    return {
      todoItems : []
    }
  },
  methods:{
    
    addOneItem(todoItem){
      const obj ={completed : false, item : todoItem}
      //localStorage : key,value 형태로 저장(setItem API를 이용하여 localStorage에 저장)
      localStorage.setItem(todoItem, JSON.stringify(obj));
      //JSON.stringify : JSP 객체를 string으로 변환 시켜줌
      this.todoItems.push(obj);
      //화면과 localStorage 동기화
    },    
    removeOneItem(todoItem, index){
      localStorage.removeItem(todoItem.item);//object의 특정 key에 접근해서 삭제
      this.todoItems.splice(index, 1);
      //splice():특정 index에서 하나 삭제 가능 & 기존 배열 변경
      //slice(): 특정 index를 삭제하고 기존 배열 변경 x
    },
    toggleOneItem(todoItem, index){
      //todoItem.completed = !todoItem.completed;
      this.todoItems[index].completed = !this.todoItems[index].completed
      localStorage.removeItem(todoItem.item);
      //해당 아이템을 지움
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
      //지운 아이템을 새로운 아이템으로 채움
      //localStorage의 값 변경
    },
    clearAllItem(){
      localStorage.clear();
      this.todoItems = [];
    }
        
  },

  created(){//instance가 생성되자마자 호출됨(created)
    if(localStorage.length > 0){
      for(let i = 0; i<localStorage.length; i++){//반복문 let사용
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
  },
  */
  components:{
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }

}
</script>

<style>
body {
  text-align : center;
  background-color : #F6F6F6;
}
input {
  border-style : groove;
  width : 200px;
}
button{
  border-style:groove;
}
.shadow{
  box-shadow : 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>