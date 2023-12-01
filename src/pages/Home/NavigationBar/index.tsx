import { useLocation, useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

export default function NavigationBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const isSelected = (compareHash: string) => {
    if (location.pathname !== "/") {
      return false;
    }
    if (location.hash === compareHash) {
      return true;
    }
    return false;
  };

  const hideNavigationBar = () => {
    const pathname = location.pathname;
    if (pathname !== "/") {
      return true;
    }
    return false;
  };

  return (
    <div className={`${styles.navigationContainer} `}>
      <ul className={`${hideNavigationBar() ? styles.hideNavigationBar : ""}`}>
        <li
          className={isSelected("#home") || (location.pathname === "/" && !location.hash) ? styles.active : ""}
          onClick={() => navigate("/#home")}
        ></li>
        <li className={isSelected("#profile") || location.pathname === "/profile" ? styles.active : ""} onClick={() => navigate("/#profile")}></li>
        <li className={isSelected("#about") || location.pathname === "/about" ? styles.active : ""} onClick={() => navigate("/#about")}></li>
        <li className={isSelected("#contact") ? styles.active : ""} onClick={() => navigate("/#contact")}></li>
      </ul>
    </div>
  );
}
