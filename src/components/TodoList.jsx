import React, { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";
import styles from "./TodoList.module.css";
const TodoList = ({ filter }) => {
  const [todo, setTodo] = useState(() => readTodoFn());

  const handleAdd = (todo) => {
    setTodo((prev) => {
      return [...prev, todo];
    });
  };
  const handleDel = (e) => {
    let copy = todo.filter((v) => {
      return v.id != e.target.id;
    });
    setTodo([...copy]);
  };
  const update = (update) => {
    setTodo(
      todo.map((v) => {
        return v.id == update.id ? update : v;
      })
    );
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);
  const filtered = getFilteredItems(todo, filter);
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((v, i) => {
          return (
            <Todo
              key={v.id}
              checked={v.status == "끝남"}
              todo={v}
              handleDel={handleDel}
              id={v.id}
              update={update}>
              {v.title}
            </Todo>
          );
        })}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
};
function getFilteredItems(todo, filter) {
  if (filter == "모두") {
    return todo;
  } else {
    return todo.filter((todo) => {
      return todo.status == filter;
    });
  }
}

function readTodoFn() {
  const todo = localStorage.getItem("todo");
  return todo ? JSON.parse(todo) : [];
}
export default TodoList;
