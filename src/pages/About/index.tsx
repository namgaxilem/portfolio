import { useLocation } from "react-router-dom";
import styles from "./styles.module.scss";
import DetailDescription from "@/components/DetailDescription";
import DetailFooter from "@/components/DetailFooter";

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
      <div>
        <DetailDescription titleNumber={"01"} title={"BRIEF ABOUT ME"}>
          Some asdhaksjdhaisudal
        </DetailDescription>
        <DetailFooter />
      </div>
    </main>
  );
}
