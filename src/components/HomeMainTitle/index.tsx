import styles from "./styles.module.scss";

interface Props {
  title?: string | React.ReactNode;
  subTitle?: React.ReactNode;
  showButton?: boolean;
}
export default function HomeMainTitle({ title, subTitle, showButton }: Props) {
  return (
    <div className={styles.homeMainTitleContainer}>
      <div className={styles.title}>{title}</div>
      <div className={styles.twoDash}>
        <span className={`${styles.dash} ${styles.dash1}`}></span>
        <span className={`${styles.dash} ${styles.dash2}`}></span>
      </div>
      <div>{subTitle}</div>
      {showButton && <button>button ne</button>}
    </div>
  );
}
