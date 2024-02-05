import { useState } from "react";
import styles from "./todoform.module.css";

export default function Form({ todos, setTodos }) {
  const [toDo, setToDo] = useState({ name: "", status: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, toDo]);
  }

  return (
    <form className={styles.todoform} onSubmit={(e) => handleSubmit(e)}>
      <div className={styles.inputContainer}>
        <input
          placeholder="Enter items for todo list"
          className={styles.modernInput}
          onChange={(e) => setToDo({ name: e.target.value, status: false })}
          type="text"
          value={toDo.name}
        />
        <button className={styles.modernButton}>Ok</button>
      </div>
    </form>
  );
}
