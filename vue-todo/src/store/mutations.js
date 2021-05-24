const addOneItem=(state,todoItem)=>{
    //완료 여부 데이터 객체
      //하위 컴포넌트에서 받은 값 todoItem
      const obj={complete: false, item:todoItem}
      //this => 현재 vue인스턴스에 등록되어있는 this
      //저장 로직 수행 setItem 함수
      //JSON.stringify(obj) API => js객체를 스트링으로 변환
      localStorage.setItem(todoItem,JSON.stringify(obj));
      state.todoItems.push(obj);
    }
const removeOneItem=(state,payload)=>{
        console.log(payload.todoItem.item )
        //로컬스토리지 삭제 함수 removeItem
        localStorage.removeItem(payload.todoItem.item);
        //js 배열 삭제 splice (특정인덱스,개수 삭제) / slice는 삭제된 새로운 배열 반환
        state.todoItems.splice(payload.index,1);
    }
const  toggleOneItem=(state,{todoItem,index})=>{
        state.todoItems[index].complete=!state.todoItems[index].complete
        //로컬스토리지 해당 데이터 삭제 후 재 추가
        localStorage.removeItem(todoItem.item);
        localStorage.setItem(todoItem.item,JSON.stringify(todoItem))
    }
const clearAllItems=(state)=>{
        localStorage.clear()
        state.todoItems=[]
    }

export {addOneItem,removeOneItem,toggleOneItem,clearAllItems} 
