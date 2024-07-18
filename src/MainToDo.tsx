import React, { useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
import { addTodo } from "./store/todoSlice";
import "./MainToDo.css";

const MainToDo = () => {
  const [text, setText] = useState({
    name: "",
    title: "",
    time: "",
  });

  const dispatch = useDispatch();

  const addTask = () => dispatch(addTodo(text));

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setText((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="main">
      <button onClick={addTask} style={{ marginTop: "100px" }}>
        Click
      </button>
      <ToDoInput
        nameInput="Name"
        value={text.name}
        givevent={handleInputChange}
        inputName="name"
      />
      <ToDoInput
        nameInput="Title"
        value={text.title}
        givevent={handleInputChange}
        inputName="title"
      />
      <ToDoInput
        nameInput="Time"
        value={text.time}
        givevent={handleInputChange}
        inputName="time"
      />

      <div className="header">
        <div>
          <input className="find_todo"></input>
          <button>Poisk</button>
        </div>
      </div>

      <div className="todo_list">
        <ToDoList />
      </div>
    </div>
  );
};

export default MainToDo;
