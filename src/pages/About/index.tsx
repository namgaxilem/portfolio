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
      <br />
      <br />
      <br />
      <DetailDescription titleNumber={"01"} title={"BRIEF ABOUT ME"}>
        Some asdhaksjdhaisudal Some asdhaksjdhaisudal Some asdhaksjdhaisudal Some asdhaksjdhaisudal Some asdhaksjdhaisudal Some asdhaksjdhaisudal Some
        asdhaksjdhaisudal Some asdhaksjdhaisudal Some asdhaksjdhaisudal Some asdhaksjdhaisudal Some asdhaksjdhaisudal Some asdhaksjdhaisudal Some
        asdhaksjdhaisudal Some asdhaksjdhaisudal Some asdhaksjdhaisudal Some asdhaksjdhaisudal Some asdhaksjdhaisudal Some asdhaksjdhaisudal Some
        asdhaksjdhaisudal
      </DetailDescription>
      <br />
      <br />
      <br />
      <DetailDescription titleNumber={"02"} title={"PASSION"}>
        Some asdhaksjdhaisudal Some asdhaksjdhaisudal Some asdhaksjdhaisudal Some asdhaksjdhaisudal Some asdhaksjdhaisudal Some asdhaksjdhaisudal Some
        asdhaksjdhaisudal Some asdhaksjdhaisudal Some asdhaksjdhaisudal Some asdhaksjdhaisudal Some asdhaksjdhaisudal Some asdhaksjdhaisudal Some
        asdhaksjdhaisudal Some asdhaksjdhaisudal Some asdhaksjdhaisudal Some asdhaksjdhaisudal Some asdhaksjdhaisudal Some asdhaksjdhaisudal Some
        asdhaksjdhaisudal
      </DetailDescription>
      <br />
      <br />
      <br />
      <DetailDescription titleNumber={"03"} title={"SKILL SET"}>
        Some asdhaksjdhaisudal Some asdhaksjdhaisudal Some asdhaksjdhaisudal Some asdhaksjdhaisudal Some asdhaksjdhaisudal Some asdhaksjdhaisudal Some
        asdhaksjdhaisudal Some asdhaksjdhaisudal Some asdhaksjdhaisudal Some asdhaksjdhaisudal Some asdhaksjdhaisudal Some asdhaksjdhaisudal Some
        asdhaksjdhaisudal Some asdhaksjdhaisudal Some asdhaksjdhaisudal Some asdhaksjdhaisudal Some asdhaksjdhaisudal Some asdhaksjdhaisudal Some
        asdhaksjdhaisudal
      </DetailDescription>
      <br />
      <br />
      <br />
      <DetailFooter />
    </main>
  );
}
