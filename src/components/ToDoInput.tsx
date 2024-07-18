import React, { FC, ChangeEvent } from "react";

interface ToDoInputProps {
  value: string;
  givevent: (event: ChangeEvent<HTMLInputElement>) => void;
  nameInput: string;
  inputName: string;
}

const ToDoInput: FC<ToDoInputProps> = ({
  value,
  givevent,
  nameInput,
  inputName,
}) => {
  return (
    <>
      {nameInput}:
      <input
        id="outlined-basic"
        name={inputName}
        value={value}
        onChange={givevent}
      />
    </>
  );
};

export default ToDoInput;
