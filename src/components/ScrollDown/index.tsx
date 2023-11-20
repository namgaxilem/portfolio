import styles from "./styles.module.scss";

export default function ScrollDown() {
  return (
    <span className={styles.scrollDownContainer}>
      <span className={styles.verticalLine} />
      <span>SCROLL DOWN</span>
    </span>
  );
}
