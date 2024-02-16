import './App.css';
import React from 'react';
import Header from './components/Header'
import ToDoLIST from './components/ToDoLIST';
import { useState } from 'react';


const App = () => {  
    
    const dummy_tools = [
        {msg: 'Hit the gym', isDone: true},
        {msg: 'Pay bils', isDone: true},
        {msg: 'Meet George', isDone: false},
        {msg: 'Buy Eggs', isDone: false},
        {msg: 'Read a book', isDone: true}
    ]

    const [todos, setTodos] = useState(dummy_tools);

    const deleteItem = (idx) => {
        // console.log(idx)
        const newTodos = todos.filter((val, index)=>{
            return index !== idx;
        })
        setTodos(newTodos);
    }

    const completeItem = (idx) => {
        const todosItems = [...todos]
        const el = todosItems[idx]
        if(el.isDone){
            el.isDone = false
        }
        else {
            el.isDone = true
        }
        todosItems[idx] = el
        setTodos(todosItems)
    }

        // console.log(idx);
        // const element = todos[idx];
        // console.log(element);
    
        // todos.filter((idx, index)=>{
        //     if(idx === index){

        //     }
        // })
    
    const addItem = (message) => {
        if(message === ""){
            alert("You must write something");
            
        }
        else {
        console.log(message);
        setTodos((prvTodos) =>{
            return [...prvTodos, {msg: message, isDone: false }]
        })
    }
}
    return(
        <>
        <Header  getMsg = {addItem} />
        <ToDoLIST todos = {todos}  deleteItem = {deleteItem}  completeItem = {completeItem} />
        </>
    );

    
}

export default App;