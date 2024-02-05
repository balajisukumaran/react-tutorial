import styles from "./todoitem.module.css";

export default function ToDoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo.name != item.name));
  }

  function handleClick(item) {
    const newArray = todos.map((todoItem) =>
      todoItem.name === item.name
        ? { ...todoItem, status: !todoItem.status }
        : todoItem
    );

    setTodos(newArray);
  }

  const className = item.status ? styles.complete : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={className} onClick={() => handleClick(item)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
