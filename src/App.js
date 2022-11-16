import React, {useEffect, useState} from 'react';
import TodoList from './mainList/TodoList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FavoritesPage from './favePage/FavoritesPage';
import Header from './Header';
import CreateTab from "./tabs/CreateTab"
import style from "./app.module.css"


// Function to preserve list upon refresh. Works with local storage.--sb

const useSemiPersistentState = () => {
  
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("savedTodoList")) || []
  );

  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
};

function App() {
  return (
    <BrowserRouter>
      <Header className={style.header} />
        <Routes>
        
        {/* home */}
          <Route path="/" element={
  <>        
            <h1 className="mainList">Todo List Title</h1>
            <TodoList useSemiPersistentState={useSemiPersistentState} />
  </>     
        }></Route>

        
        {/* FavePage */}
          <Route path="/Favorites" element={
  <>
            <h1>Favorites</h1>
            <FavoritesPage useSemiPersistentState={useSemiPersistentState} />
  </>
        }></Route>

        {/* Create New Tab */}
        <Route path="/CreateNewTab" element={
  <>
            <h1>Create New Tab</h1>
            <CreateTab useSemiPersistentState={useSemiPersistentState}/>
  </>
        }></Route>
        
        </Routes>
      </BrowserRouter>
  
      );
};
export default App;