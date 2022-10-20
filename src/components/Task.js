import React, { useRef } from "react";

const Task = (props) => {

  const { item, updateTodo, removeTodo, completeTodo } = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };
  return (
    <li key={item.id}>

      <textarea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)} />
      <div >
        <button onClick={() => changeFocus()}> modifier </button>
        {item.completed === false && (
          <button
            style={{ color: "green" }}
            onClick={() => completeTodo(item.id)}>compl</button>
        )}
        <button
          style={{ color: "red" }}
          onClick={() => removeTodo(item.id)} > supp </button>

      </div>
      <br />
    </li>
  );
};

export default Task;