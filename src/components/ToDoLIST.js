import React from "react";
import ListItem from "./ListItem";

const ToDoLIST = (props) => {
  const { todos, completeItem, deleteItem } = props;
  return (
    <ul id="myUL">
      {todos.map((todo, key) => (
        <ListItem
          key={key}
          idx={key}
          todo={todo}
          completeItem={completeItem}
          deleteItem={deleteItem}
        />
      ))}
    </ul>
  );
};

export default ToDoLIST;
