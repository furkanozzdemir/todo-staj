import React, { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const onclickEvent = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

    setList([...list, newTodo]);
    console.log(list);
    setInput("");
  };
  const deleteBtn = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };

  return (
    <div className="main-div">
      <h1>To-Do List</h1>
      <div className="form-class">
        <input
          className="input-box"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="add a todo..."
        ></input>

        <button className="btn " onClick={() => onclickEvent(input)}>
          add
        </button>
      </div>
      <div className="list-class">
        <ul>
          {list.map((todo) => (
            <li key={todo.id}>
              {todo.todo}{" "}
              <button className="btn-delete" onClick={() => deleteBtn(todo.id)}>
                &times;
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
