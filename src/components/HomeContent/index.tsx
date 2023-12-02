import { useLocation } from "react-router-dom";
import styles from "./styles.module.scss";

interface Props {
  id: string;
  children: React.ReactNode;
}
export default function HomeContent({ id, children }: Props) {
  const location = useLocation();

  const isDetailPage = () => {
    const pathname = location.pathname.replace("/", "");
    const hash = location.hash.replace("#", "");
    if (pathname === id && hash === "") {
      return styles.detailPage;
    }
    if (hash) {
      return "";
    }
    return styles.notDetailPage;
  };

  return (
    <div id={id} className={`${styles.homeContentContainer} ${isDetailPage()}`}>
      {children}
    </div>
  );
}
