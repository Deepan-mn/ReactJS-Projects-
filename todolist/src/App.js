import React from'react';
import "./App.css"
import Todolist from './Todolist/todolist';


const TodoApp=()=>{
 let dateobj =new Date();
 let days=["Sun","Mon","Tues","Wed","Thur","Fri","Sat"];
 let months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
 let date =dateobj.getDate();
 let month = months[dateobj.getMonth()];
 let day = days[dateobj.getDay()];  
 
 return(
 <div className="Todo-app">
   <h1> Today <span >{day} {date} {month}</span></h1>
  <Todolist/>
 </div>
 );
  
}
export default TodoApp;