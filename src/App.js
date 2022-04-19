import logo from './logo.svg';
import './App.css';
import AddTodo from './component/AddTodo';
import { useState } from 'react';
import {toDoCard} from './component/TodoCardData';
import Todolist from './component/TodoList';

function App() {
  const  [toDo,settoDo]=useState(toDoCard)
  console.log("azerty" ,toDo)
  return (
    <div className="App">
      <AddTodo toDo={toDo} settoDo={settoDo}/>
      <Todolist toDo={toDo} />
    
    </div>
  );
}

export default App;
