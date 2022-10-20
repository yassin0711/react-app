import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos, completeTodos, removeTodos, updateTodos } from "../store/slice";
import Task from "./Task";



const ListTask = (props) => {
  const [sort, setSort] = useState("active");
  return (
    <div >
      <div >

        <button onClick={() => setSort("active")}>Active</button>
        <button onClick={() => setSort("completed")}>Completed</button>
        <button onClick={() => setSort("all")}>  All  </button>

      </div>

      <ul>

        {props.todos.length > 0 && sort === "active" ? props.todos.map((item) => {
          return (
            item.completed === false && (
              <Task
                key={item.id}
                item={item}
                removeTodo={props.removeTodo}
                updateTodo={props.updateTodo}
                completeTodo={props.completeTodo}
              />
            )
          );
        }) : null}

        {props.todos.length > 0 && sort === "completed" ? props.todos.map((item) => {
          return (
            item.completed === true && (
              <Task
                key={item.id}
                item={item}
                removeTodo={props.removeTodo}
                updateTodo={props.updateTodo}
                completeTodo={props.completeTodo}
              />
            )
          );
        }) : null}

        {props.todos.length > 0 && sort === "all" ? props.todos.map((item) => {
          return (
            <Task
              key={item.id}
              item={item}
              removeTodo={props.removeTodo}
              updateTodo={props.updateTodo}
              completeTodo={props.completeTodo}
            />
          );
        }) : null}

      </ul>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (x) => dispatch(addTodos(x)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTask);