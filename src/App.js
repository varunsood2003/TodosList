import './App.css';
import Header from './myComponents/Header';
import { AddTodo } from './myComponents/AddTodo';
import {Todos} from './myComponents/Todos';
import {Footer} from './myComponents/Footer';
import React, { useState,useEffect } from 'react';


function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }


  const onDelete=(todo)=>{
    console.log("Im on delete todo",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
    
    }
    const addTodo=(title,desc)=>{
      console.log("im add",title,desc)
      let sno;
      if(todos.length===0){
        sno=0;
      }
      else{
        let sno=todos[todos.length-1].sno+1;
  
      }
      const myTodo={
    sno:sno,
    title:title,
    desc:desc
  }
  setTodos([...todos,myTodo]);
  console.log(myTodo);
  
    
  }
  
  const [todos, setTodos] = useState(initTodo);
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  

  },[todos])
  
  return (
  <>
  <Header title="Todos List"/>
  <AddTodo addTodo={addTodo}/>
  <Todos todos={todos} onDelete={onDelete}/>
  <Footer/>
  

  </>
  );
}

export default App;
