const storage = {//localStorage의 배열을 받아와서 arr에 push
    fetch(){
        const arr = [];
        if(localStorage.length > 0){
            for(let i = 0; i<localStorage.length;i++){
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
        return arr;
    }
};

const state = {
    todoItems : storage.fetch()
};

const getters = {
    storedTodoItems(state){
        return state.todoItems;
    }
};

const mutations = {
    addOneItem(state, todoItem){
        const obj ={completed : false, item : todoItem}
        //localStorage : key,value 형태로 저장(setItem API를 이용하여 localStorage에 저장)
        localStorage.setItem(todoItem, JSON.stringify(obj));
        //JSON.stringify : JSP 객체를 string으로 변환 시켜줌
        state.todoItems.push(obj);
        //mutations에서 state로 접근
    },
    removeOneItem(state, payload){
        localStorage.removeItem(payload.todoItem.item);//object의 특정 key에 접근해서 삭제
        state.todoItems.splice(payload.index, 1);
    },
    toggleComplete(state, payload){
        state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed
        localStorage.removeItem(payload.todoItem.item);
        //해당 아이템을 지움
        localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    },
    clearAllItem(state){
        localStorage.clear();
        state.todoItems = [];
    }

};

export default{ //default : 1개의 파일에서 한개만 추출가능
    state,
    getters,
    mutations    
}