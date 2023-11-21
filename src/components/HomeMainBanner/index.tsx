import styles from "./styles.module.scss";

interface Props {
  pageNumber: string;
}
export default function HomeMainBanner({ pageNumber }: Props) {
  return (
    <div className={styles.homeMainBannerContainer}>
      <div className={styles.asd}>Image HomeMainBanner</div>
      <div>{pageNumber}</div>
    </div>
  );
}
