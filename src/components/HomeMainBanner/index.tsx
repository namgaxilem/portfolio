import { useLocation } from "react-router-dom";
import styles from "./styles.module.scss";
import { MainHomePageNumberType } from "@/types";

interface Props {
  pageNumber: MainHomePageNumberType;
}
export default function HomeMainBanner({ pageNumber }: Props) {
  const location = useLocation();

  const checkHashChange = () => {
    const hash = location.hash.replace("#", "");
    if (
      (pageNumber === "01" && hash === "home") ||
      (pageNumber === "02" && hash === "profile") ||
      (pageNumber === "03" && hash === "about") ||
      (pageNumber === "04" && hash === "contact")
    ) {
      return true;
    }
    return false;
  };

  return (
    <>
      <div className={`${styles.homeMainBannerContainer} ${checkHashChange() ? styles.homeMainBannerContainerRun : null}`}>
        <div className={styles.mainBanner}>Image HomeMainBanner</div>
        <div className={`${styles.pageNumber} ${checkHashChange() ? styles.pageNumberRun : null}`}>{pageNumber}</div>
      </div>
    </>
  );
}
