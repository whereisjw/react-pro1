import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";
import { useState } from "react";

const filters = ["모두", "진행중", "끝남"];
function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <>
      <Filter filters={filters} filter={filter} setFilter={setFilter}></Filter>
      <TodoList filter={filter}></TodoList>
    </>
  );
}

export default App;
