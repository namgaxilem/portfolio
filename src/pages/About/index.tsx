import { useLocation } from "react-router-dom";
import styles from "./styles.module.scss";

export default function About() {
  const location = useLocation();

  const isDetailPage = () => {
    if (location.pathname === "/about") {
      return true;
    }
    return false;
  };

  return (
    <main className={`${styles.detailContainer} ${isDetailPage() ? styles.show : ""}`}>
      {[...Array(100)].map((e) => (
        <div key={e}>e</div>
      ))}
    </main>
  );
}
