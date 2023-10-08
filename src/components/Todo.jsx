import React from "react";
import styles from "./Todo.module.css";
const Todo = ({ key, checked, onChange, todo, update, id, handleDel }) => {
  const handleChange = (e) => {
    const status = e.target.checked ? "끝남" : "진행중";
    update({ ...todo, status: status });
  };
  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id="checkbox"
        checked={todo.status == "끝남"}
        onChange={handleChange}
      />
      <label htmlFor="checkbox"> {todo.title}</label>

      <span className={styles.icon}>
        <button
          id={todo.id}
          onClick={handleDel}
          className={styles.button}
          type="button">
          ✖️
        </button>
      </span>
    </li>
  );
};

export default Todo;
