import React, {useState} from 'react';
import AddTodoLabel from './AddTodoLabel';
import style from "./mainList.module.css"
import { FaPlusCircle } from "react-icons/fa"


// This function assembles form with input field--sb 

const AddTodoForm = ({ addTodo }) => {
    const [todoTitle, setTodoTitle] = useState("")

    const handleTitleChange = (e) => {
        const newTodoTitle = e.target.value;
        setTodoTitle(newTodoTitle);
    };

    const handleAddTodo = (e) => {
        e.preventDefault();
        addTodo({ title: todoTitle, id: Date.now() });
        setTodoTitle("");
    };

    return (
        <form onSubmit={handleAddTodo}>
            <AddTodoLabel
                todoTitle={todoTitle}
                handleTitleChange={handleTitleChange}>
                Title
            </AddTodoLabel>
            <button className={style.addButton} type="submit"><FaPlusCircle /></button>
        </form>
    );
};

export default AddTodoForm;


