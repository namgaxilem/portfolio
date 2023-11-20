import { useLocation, useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

export default function NavigationBar() {
  const location = useLocation();
  const navigate = useNavigate();

  console.log("concac", location);
  const isSelected = (compareHash: string) => {
    if (location.pathname !== "/") {
      return false;
    }
    if (location.hash === compareHash) {
      return true;
    }
    return false;
  };

  return (
    <div className={styles.navigationContainer}>
      <ul>
        <li
          className={
            isSelected("#home") || (location.pathname === "/" && !location.hash)
              ? styles.active
              : ""
          }
          onClick={() => navigate("/#home")}
        ></li>
        <li
          className={isSelected("#profile") ? styles.active : ""}
          onClick={() => navigate("/#profile")}
        ></li>
        <li
          className={isSelected("#about") ? styles.active : ""}
          onClick={() => navigate("/#about")}
        ></li>
        <li
          className={isSelected("#contact") ? styles.active : ""}
          onClick={() => navigate("/#contact")}
        ></li>
      </ul>
    </div>
  );
}
