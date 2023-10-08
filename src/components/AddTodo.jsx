import React, { useState } from "react";
import uuid from "react-uuid";
import styles from "./TodoList.module.css";

const AddTodo = ({ onAdd }) => {
  const [txt, setTxt] = useState("");
  const handleChange = (e) => {
    setTxt(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (txt.trim() == "") {
      return false;
    }
    onAdd({ id: uuid(), title: txt, status: "진행중" });
    setTxt("");
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Todo"
        name="todo"
        value={txt}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
};

export default AddTodo;
