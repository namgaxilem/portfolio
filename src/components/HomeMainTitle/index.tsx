import { useLocation } from "react-router-dom";
import styles from "./styles.module.scss";
import { MainHomePageTitleType } from "@/types";

interface Props {
  idAnchorPage: string;
  title?: string | React.ReactNode;
  subTitle?: React.ReactNode;
  buttonTxt?: string;
}
export default function HomeMainTitle({ idAnchorPage, title, subTitle, buttonTxt }: Props) {
  const location = useLocation();

  const checkHashChange = (type: MainHomePageTitleType) => {
    const hash = location.hash.replace("#", "");
    if (idAnchorPage === hash) {
      switch (type) {
        case "title":
          return styles.titleRun;
        case "dash1":
          return styles.dash1Run;
        case "dash2":
          return styles.dash2Run;
        case "subTitle":
          return styles.subTitleRun;
        case "button":
          return styles.buttonRun;
        default:
          return null;
      }
    }
    return "";
  };

  return (
    <div className={styles.homeMainTitleContainer}>
      <div className={styles.homeMainTitleWrap}>
        <div className={`${styles.title} ${checkHashChange("title")}`}>{title}</div>
        <div className={styles.twoDash}>
          <span className={`${styles.dash} ${styles.dash1} ${checkHashChange("dash1")}`}></span>
          <span className={`${styles.dash} ${styles.dash2} ${checkHashChange("dash2")}`}></span>
        </div>
        <div className={`${styles.subTitle} ${checkHashChange("subTitle")}`}>{subTitle}</div>
        {buttonTxt && <button className={`${styles.button} ${checkHashChange("button")}`}>{buttonTxt}</button>}
      </div>
    </div>
  );
}
