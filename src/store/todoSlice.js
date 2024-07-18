import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ 
        name: action.payload.name,
        title: action.payload.title,
        time: action.payload.time,
        id: new Date().toISOString(),
      });
    },
    delTask: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { addTodo, delTask } = todoSlice.actions;

export default todoSlice.reducer;