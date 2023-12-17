import styles from "./styles.module.scss";

interface Props {
  titleNumber?: string;
  title?: string;
  detail?: React.ReactNode;
}
export default function DetailDescription({ titleNumber, title, detail }: Props) {
  return (
    <div className={styles.detailContainer}>
      <div className={styles.title}></div>
      <div className={styles.detail}>{detail}</div>
    </div>
  );
}
