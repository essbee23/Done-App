import React, {useEffect, useState} from 'react';
import TodoList from './TodoList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FavoritesPage from './FavePage/FavoritesPage';
import Header from './Header';
import TabTodo from "./TabTodo"


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
      <Header />
        <Routes>
        
        {/* home */}
          <Route path="/" element={
  <>        
            <h1>Todo List Title</h1>
            <TodoList useSemiPersistentState={useSemiPersistentState}/>
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
            <TabTodo useSemiPersistentState={useSemiPersistentState}/>
  </>
        }></Route>
        
        </Routes>
      </BrowserRouter>
  
      );
};
export default App;