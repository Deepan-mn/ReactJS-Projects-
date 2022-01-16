import React from 'react';
import Popup from '../popup/pop';
import './todo.css'

const Todo = props => {
    const [edit,setEdit] =React.useState({
        index :null,
        text:''
    });
    const update=val=>{
        props.edit(edit.index,val);
        setEdit({
            index:null,
            text:''
        });
    }
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
                    <button key={arr[4]++} className='edit' onClick={
                        ()=>setEdit({
                                index:index,
                                text:currentElement.text
                        })
                    }
                    disabled={
                        currentElement.isComplete ?true:false
                    }  
                     >EDIT &#10000;</button>
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
            {
                edit.text?( <Popup  edit={edit} update={update}/>):null
            }
        </div>

    );
}
export default Todo;