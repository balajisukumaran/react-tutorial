import ToDoItem from "./ToDoItem";
import styles from "./todolist.module.css";

export default function ToDoList({ todos, setTodos }) {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.status) - Number(b.status));

  return (
    <div className={styles.list}>
      {sortedTodos.map((item) => (
        <ToDoItem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
