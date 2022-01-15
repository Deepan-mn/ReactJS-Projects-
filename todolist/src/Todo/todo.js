import React from 'react';
import './todo.css'

const Todo = props => {
    const arr=[1,2,3,4,5,6,7];
    const handleClick=()=>{
        return;
    }
 
    const todolist =props.todo.map(
        (currentElement,index)=>{
            return <div key={index}>
                <li key={arr[0]++}>
                <span key={arr[3]++} onClick={
                    
                currentElement.isComplete ? ()=>props.remove(index):{handleClick}
                }
                className={
                    currentElement.isComplete ?"cross" :"do"
                }
                    
                >
                    {
                        currentElement.isComplete ? ' X ' : ' -> ' 
                    }
                
                </span>
                <span key={arr[1]++} 
                    className={
                        currentElement.isComplete?"completeTask":"dueTask"
                    }
                    onClick={
                        ()=>props.isComplete(index)}>
                        {currentElement.text}

                    </span>
                    <hr key ={arr[2]++}/>
                </li>
            </div>
        }
    );

    return(
        <div>
            <center>
               <div className='Todo'>
                   <ol className='Ol'>
                       {todolist}
                   </ol>
               </div>
            </center>
        </div>

    );
}
export default Todo;