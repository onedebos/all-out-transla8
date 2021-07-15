import styles from "./Container.module.css";

export default function Container({ children }) {
  return (
    <div>
      <div class={styles.container}>{children}</div>
    </div>
  );
}
