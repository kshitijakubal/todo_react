import logo from './logo.svg';
import './App.css';
import Todo from "./components/Todo"
import todosdata from "./todosData"

function App() {
  const todoComponents = todosdata.map(todo => 
      <Todo key={todo.id} completed={todo.completed} text={todo.text}/>)
  return (
    <div className="todo-list">
       {todoComponents}
    </div>
  );
}

export default App;
