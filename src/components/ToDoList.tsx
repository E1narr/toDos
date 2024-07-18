import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { delTask } from "../store/todoSlice";
import "./ToDolist.css";

interface ToDoListProps {}

const ToDoList: FC<ToDoListProps> = () => {
  const todos = useSelector((state: any) => state.todos.todos);
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    dispatch(delTask(id));
  };

  return (
    <>
      {todos.map((item: any, index: number) => (
        <div key={index} className="tabble">
          <div className="tabble_child">NAME: {item.name}</div>
          <div className="tabble_child">TITLE: {item.title}</div>
          <div className="tabble_child">TIME: {item.time}</div>
          <div className="tabble_child">ID: {item.id}</div>
          <button
            onClick={() => handleDelete(item.id)}
            className="tabble_child"
          >
            &times;
          </button>
        </div>
      ))}
    </>
  );
};

export default ToDoList;
