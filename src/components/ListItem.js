import React from 'react'

const ListItem = (props) => {

  const {todo, idx, completeItem, deleteItem} = props;
  console.log(todo, idx);

  return ( 
    <li className={todo.isDone ? 'checked': ' ' } onClick= {()=> completeItem(idx) }>{todo.msg}
    <span className= "close" onClick={() => deleteItem(idx)}>x</span>
    </li>
   );
}
 
export default ListItem;