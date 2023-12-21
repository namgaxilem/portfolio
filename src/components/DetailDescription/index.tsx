import styles from "./styles.module.scss";

interface Props {
  titleNumber?: string;
  title?: string;
  children?: React.ReactNode;
}
export default function DetailDescription({ titleNumber, title, children }: Props) {
  return (
    <div className={styles.detailDescription}>
      <div className={styles.titleContainer}>
        <div className={styles.titleNumber}>{titleNumber}</div>
        <div className={styles.titleTxt}>{title}</div>
      </div>
      <div className={styles.detail}>{children}</div>
    </div>
  );
}
