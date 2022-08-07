import React, { FormEvent, useRef } from "react";

type NewTodoProps = {
  onAddTodo: (text: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = props => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    const inputText = textInputRef.current!.value;
    textInputRef.current!.value = "";
    props.onAddTodo(inputText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default NewTodo;
