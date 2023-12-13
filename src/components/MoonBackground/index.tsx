import { useLocation } from "react-router-dom";
import styles from "./styles.module.scss";

const MOON_COLOR = "#434F5D";

export default function MoonBackground() {
  const location = useLocation();

  const isShowScrollDown = () => {
    if ((location.pathname === "/" && !["#profile", "#about", "#contact"].includes(location.hash)) || location.pathname !== "/") {
      return true;
    }
    return false;
  };

  return (
    <>
      <div className={styles.moonContainer}>
        <svg viewBox="0 0 100 100" width={"auto"} height={"auto"}>
          <circle cx="50%" cy="50%" r="50" fill={MOON_COLOR} style={{ fillOpacity: 0.05 }} />

          <circle cx="50%" cy="50%" r="45" fill={MOON_COLOR} style={{ fillOpacity: 0.15 }} />

          <circle cx="50%" cy="50%" r="40" fill={MOON_COLOR} style={{ fillOpacity: 0.25 }} />

          <circle cx="50%" cy="50%" r="35" fill={MOON_COLOR} style={{ fillOpacity: 0.35 }} />

          <circle cx="50%" cy="50%" r="30" fill={MOON_COLOR} style={{ fillOpacity: 0.45 }} />

          <circle cx="50%" cy="50%" r="25" fill={MOON_COLOR} style={{ fillOpacity: 0.55 }} />
        </svg>
      </div>
    </>
  );
}
