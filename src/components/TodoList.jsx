import React, { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState([
    { id: 1, title: "치킨먹기", status: "진행중" },
    { id: 2, title: "헬스장가기", status: "진행중" },
  ]);
  return (
    <div>
      <ul>
        {todo.map((v, i) => {
          return <li key={v.id}>{v.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
