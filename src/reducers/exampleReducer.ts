import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ExampleState {
  items: string[];
}

const initialState: ExampleState = {
  items: [],
};

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<string>) {
      state.items.push(action.payload);
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items.splice(action.payload, 1);
    },
    setItems(state, action: PayloadAction<string[]>) {
      state.items = action.payload;
    },
  },
});

export const { addItem, removeItem, setItems } = exampleSlice.actions;
export default exampleSlice.reducer;