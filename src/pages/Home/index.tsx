import Header from "./Header";
import NavigationBar from "./NavigationBar";
import styles from "./styles.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <NavigationBar />
    </div>
  );
}
