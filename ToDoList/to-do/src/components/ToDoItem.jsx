import styles from "./todoitem.module.css";

export default function ToDoItem({ item }) {
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>{item}</div>
      <hr className={styles.line} />
    </div>
  );
}
