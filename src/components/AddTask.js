import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../store/slice";



const AddTask = (props) => {
  const [todo, setTodo] = useState("");

  const add = () => {
    if (todo === "") {
      alert("nothing to add");
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo("");
    }
  };
  return (
    <div >
      <input
        type="text"
        onChange={(e) => { setTodo(e.target.value); }}
        value={todo}
      />
      <button onClick={() => add()}>
        Add
      </button>
      <br /><br /><br />

    </div>
  );
};

const mapStateToProps = (state) => {
  return { todos: state }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);