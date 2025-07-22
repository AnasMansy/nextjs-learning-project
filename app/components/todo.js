"use client";
 
import { useEffect, useState } from "react";

export default function Todo() {

    const [todos,setTodos]=useState({})
    const fetchData=async () =>{
         try { 
            const response= await fetch('https://jsonplaceholder.typicode.com/todos/1')
            const todo =await  response.json() 
            console.log(todo)
            setTodos(todo)
        }
            catch (error) {
                console.error("Error fetching data:", error);
            }
    }
    useEffect( ()=>{
            // Fetching data from an API
           fetchData();
         },[])
  return (
    <div>
      <h1>Todo Component</h1>
      <p>This is {todos.title}</p>
    </div>
  );
}