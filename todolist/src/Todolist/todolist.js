import React from 'react';
import AddTask from '../AddTask/Addtask';
import Todo from '../Todo/todo';

const Todolist=()=>{
    const [todothings,setTodothings] =React.useState([]);
    const AddTodo=todo=>{
    if(!todo.text){
        return;
    }
    const newtodo =[...todothings,todo];
   console.log(newtodo);
    setTodothings(newtodo);
    }
    const isComplete= index=>{
        const updatelist = [...todothings]
        updatelist[index].isComplete=!updatelist[index].isComplete;
        console.log(updatelist);
        setTodothings(updatelist);
    }

    const remove=index=>{
        const filterArr = [...todothings];
        filterArr.splice(index,1);
        setTodothings(filterArr);

    }
    const Edit=(index,newVal)=>{
        if(!newVal){
            return;
        }
        const updatelist=[...todothings]
        updatelist[index].text =newVal;
        setTodothings(updatelist);
    }

    return(
        <div className='Todo-List'>
            <AddTask Submit={AddTodo} />
             <Todo todo={todothings}  isComplete ={isComplete} remove={remove} edit={Edit}/>
             </div>
    )
}
export default Todolist;