import { useLocation } from "react-router-dom";
import styles from "./styles.module.scss";

interface Props {
  idAnchorPage: string;
  title?: string | React.ReactNode;
  subTitle?: React.ReactNode;
  showButton?: boolean;
}
export default function HomeMainTitle({
  idAnchorPage,
  title,
  subTitle,
  showButton,
}: Props) {
  const location = useLocation();

  const checkHashChange = (type: "title" | "dash" | "subTitle" | "button") => {
    const hash = location.hash.replace("#", "");
    if (idAnchorPage === hash) {
      return styles.titleRun;
    }
    return "";
  };

  return (
    <div className={styles.homeMainTitleContainer}>
      <div className={`${styles.title} ${checkHashChange("title")}`}>
        {title}
      </div>
      <div className={styles.twoDash}>
        <span
          className={`${styles.dash} ${styles.dash1} ${checkHashChange(
            "title"
          )}`}
        ></span>
        <span
          className={`${styles.dash} ${styles.dash2} ${checkHashChange(
            "title"
          )}`}
        ></span>
      </div>
      <div className={`${styles.subTitle} ${checkHashChange("subTitle")}`}>
        {subTitle}
      </div>
      {showButton && (
        <button className={`${styles.button} ${checkHashChange("button")}`}>
          button ne
        </button>
      )}
    </div>
  );
}
