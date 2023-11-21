import { useLocation } from "react-router-dom";
import styles from "./styles.module.scss";

export default function ScrollDown() {
  const location = useLocation();

  const isShowScrollDown = () => {
    if (
      (location.pathname === "/" &&
        !["#profile", "#about", "#contact"].includes(location.hash)) ||
      location.pathname !== "/"
    ) {
      return true;
    }
    return false;
  };

  return (
    <>
      <div
        className={`${styles.scrollDownContainer} ${styles.left} ${
          isShowScrollDown() ? styles.active : ""
        }`}
      >
        <span className={styles.verticalLine} />
        <span>SCROLL DOWN</span>
      </div>

      <div
        className={`${styles.scrollDownContainer} ${styles.right} ${
          isShowScrollDown() ? styles.active : ""
        }`}
      >
        <span>SCROLL DOWN</span>
        <span className={styles.verticalLine} />
      </div>
    </>
  );
}
