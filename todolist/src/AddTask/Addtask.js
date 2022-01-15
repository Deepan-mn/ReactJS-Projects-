import React from "react";
import Todo from "../Todo/todo";
import './Addtask.css'
const AddTask=props=>{
const [input,setInput] =React.useState('');

const handleChange= e =>{
    setInput(e.target.value);
}
const handleSubmit = e =>{
    e.preventDefault();
    props.Submit({
        text:input,
        isComplete:false
    });
    setInput('');
}

    return(
        <center>       
            <div className="Add-Task">
                <form onSubmit={handleSubmit}> 
                    <input type="text" placeholder="Add task! eg:Conferece meeting at 2:00pm"
                    onChange={handleChange} value={input}/>
                    <input type="submit" value="+"/>
                </form>
                
             </div>
        </center>
 
    );
}
export default AddTask;