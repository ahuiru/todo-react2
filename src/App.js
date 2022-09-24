
import { useState } from 'react';
import './App.css';
import { Title } from './components/Title';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

function App() {
  const [todoList, setTodoList] = useState([]);
  return (
    <div className="App">
      <Title />
      <TodoForm todoList={todoList} setTodoList={setTodoList}/>
      <TodoList  todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
