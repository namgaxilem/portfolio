import { useLocation, useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { MainHomePageNumberType } from "@/types";
import MainMoon from "../MainMoon";

interface Props {
  pageNumber: MainHomePageNumberType;
}
export default function HomeMainBanner({ pageNumber }: Props) {
  const location = useLocation();
  const navigate = useNavigate();

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

  const isDetailPage = () => {
    const pathname = location.pathname;
    if ((pageNumber === "02" && pathname === "/profile") || (pageNumber === "03" && pathname === "/about")) {
      return true;
    }
    return false;
  };

  const onClickBanner = () => {
    switch (pageNumber) {
      case "02":
        navigate("/profile");
        break;
      case "03":
        navigate("/about");
        break;
      default:
        break;
    }
  };

  return (
    <>
      {pageNumber !== "01" && (
        <div
          onClick={onClickBanner}
          className={`${styles.homeMainBannerContainer} 
      ${checkHashChange() ? styles.homeMainBannerContainerRun : null} ${isDetailPage() ? styles.homeMainBannerDetailRun : ""}`}
        >
          <div className={`${styles.mainBannerCover} ${checkHashChange() ? styles.mainBannerCoverRun : null}`}></div>
          <div className={`${styles.columnCover} ${checkHashChange() ? styles.columnCoverRun : null}`}></div>
          <div
            className={`${styles.pageNumber} ${checkHashChange() ? styles.pageNumberRun : null} ${isDetailPage() ? styles.pageNumberHideRun : null}`}
          >
            {pageNumber}
          </div>
        </div>
      )}

      {pageNumber === "01" && <MainMoon pageNumber="01" />}
    </>
  );
}
