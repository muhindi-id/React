import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo.trim(), checked: false }]);
      setNewTodo("");
      const handleDeleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);

        const handleToggleTodo = (index) => {
          const newTodos = [...todos];
          newTodos[index].checked = !newTodos[index].checked;
          setTodos(newTodos);
        };
        
      };
    }
  };

  return (
    <>
      <div>
        <h1>ToDo List</h1>

        <input  type="text" value={newTodo} id="lb1" onChange={(e) => setNewTodo(e.target.value)} />
          
        <button id="lb2" onClick={handleAddTodo}>
          Add
        </button>
        <ul id="tab">
          {todos.map((todo, index) => (
            <li id="list" key={index}>
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => handleToggleTodo(index)}
              />
              <span style={{
                marginRight: "10px;",
                textDecoration:todo.checked ? "line-through" : "none"
              }}>{todo.text}</span>
              <button onClick={() => handleDeleteTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
