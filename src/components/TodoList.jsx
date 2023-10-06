import React, { useState } from "react";
import AddTodo from "./AddTodo";

const TodoList = () => {
  const [todo, setTodo] = useState([
    { id: 1, title: "치킨먹기", status: "진행중" },
    { id: 2, title: "헬스장가기", status: "끝남" },
  ]);

  const handleAdd = (todo) => {
    setTodo((prev) => {
      return [...prev, todo];
    });
    console.log(todo);
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

  return (
    <div>
      <ul>
        {todo.map((v, i) => {
          return (
            <li key={v.id}>
              <input
                type="checkbox"
                id="checkbox"
                checked={v.status == "끝남"}
              />
              {v.title}
              <button onClick={handleDel} id={v.id} type="button">
                삭제
              </button>
            </li>
          );
        })}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </div>
  );
};

export default TodoList;
