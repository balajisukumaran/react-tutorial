import { useState } from "react";
import Form from "./Form";
import ToDoList from "./ToDoList";
import Footer from "./Footer";

export default function ToDo() {
  const [todos, setTodos] = useState([]);

  const completed = todos.filter((item) => item.status).length;
  const total = todos.length;
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <ToDoList todos={todos} setTodos={setTodos} />
      <Footer completed={completed} total={total} />
    </div>
  );
}
