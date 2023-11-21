import styles from "./styles.module.scss";

interface Props {
  id: string;
  children: React.ReactNode;
}
export default function HomeContent({ id, children }: Props) {
  
  return (
    <div id={id} className={styles.homeContentContainer}>
      {children}
    </div>
  );
}
