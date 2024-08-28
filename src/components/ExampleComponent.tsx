import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { addItem, removeItem } from "../reducers/exampleReducer";

const ExampleComponent: React.FC = () => {
  const items = useSelector((state: RootState) => state.example.items);
  const dispatch = useDispatch<AppDispatch>();
  const [newItem, setNewItem] = useState("");

  const handleAddItem = () => {
    if (newItem) {
      dispatch(addItem(newItem));
      setNewItem("");
    }
  };

  const handleRemoveItem = (index: number) => {
    dispatch(removeItem(index));
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleRemoveItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
};

export default ExampleComponent;
