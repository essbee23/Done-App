import React from "react";
import style from "./mainList.module.css"
import { FaPen } from "react-icons/fa"
import { FaTrashAlt } from "react-icons/fa"
import { FaRegStar } from "react-icons/fa"



//Function creates list item with checkbox, todo.title, star, edit, remove.--sb

const TodoListItem = ({ todo, onRemoveTodo, handleCheck, handleStar }) => {
  return (
      
    <li className={style.listItem} key={todo.id}>

      <input className={style.checkBox} value={todo.title} type="checkbox" onChange={handleCheck} />
      {todo.title}
      <button type="button" onClick={handleStar}><FaRegStar/></button>
      <button type="button" ><FaPen/></button>
      <button type="button" onClick={() => onRemoveTodo(todo.id)}><FaTrashAlt/></button>
      
    </li>       
  );
};

export default TodoListItem;