import { useLocation } from "react-router-dom";
import styles from "./styles.module.scss";

export default function About() {
  const location = useLocation();

  const isDetailPage = () => {
    return false;
  };
  return <main className={`${styles.detailContainer} ${isDetailPage() ? styles.show : ""}`}>About</main>;
}
