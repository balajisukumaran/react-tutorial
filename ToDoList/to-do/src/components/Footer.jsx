import styles from "./footer.module.css";

export default function Footer({ completed, total }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed Todos: {completed}</span>
      <span className={styles.item}>Total Todos: {total}</span>
    </div>
  );
}
