import { useState } from "react";
import Form from "./Form";
import ToDoList from "./ToDoList";

export default function ToDo() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <ToDoList todos={todos} />
    </div>
  );
}
