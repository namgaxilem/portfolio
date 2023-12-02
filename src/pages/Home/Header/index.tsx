import { useState } from "react";
import styles from "./styles.module.scss";
import INSTAGRAM_ICON from "@/assets/instagram-icon.png";
import FACEBOOK_ICON from "@/assets/facebook-icon.png";
import LINKEDIN_ICON from "@/assets/linkedin-icon.png";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const [openNav, setOpenNav] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isDetailPage = () => {
    const pathname = location.pathname.replace("/", "");
    if (pathname) {
      return true;
    }
    return false;
  };

  const goBack = () => {
    const hashToGo = location.pathname.replace("/", "");
    navigate(`/#${hashToGo}`);
  };

  return (
    <>
      <header className={styles.headerContainer}>
        <a className={styles.myName}>Nam Nguyễn</a>
        <div className={styles.linkGroup}>
          <a href="https://www.linkedin.com/in/nam-nguy%E1%BB%85n-4562b52a0/" target="_blank" className={styles.brandIcon}>
            <img src={LINKEDIN_ICON} />
          </a>
          <a href="https://www.instagram.com/namnungniuz/" target="_blank" className={styles.brandIcon}>
            <img src={INSTAGRAM_ICON} />
          </a>
          <a href="https://www.facebook.com/namgaxilem/" target="_blank" className={styles.brandIcon}>
            <img src={FACEBOOK_ICON} />
          </a>

          <div className={styles.hamburgerLines} onClick={() => setOpenNav(!openNav)}>
            <span className={`${styles.line} ${styles.line1} ${openNav && styles.active}`}></span>
            <span className={`${styles.line} ${styles.line2} ${openNav && styles.active}`}></span>
          </div>
        </div>

        <span className={`${isDetailPage() ? styles.backArrow : styles.hide}`} onClick={goBack}>
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="34" viewBox="0 0 67 34">
            <g fill="none" fill-rule="evenodd" stroke="#FFF" stroke-linecap="round" transform="translate(2 1)">
              <path stroke-width="2" d="M0,15.5533333 L64,15.5533333"></path>
              <polyline stroke-width="2" points="15.556 0 0 15.556 15.556 31.111"></polyline>
            </g>
          </svg>
        </span>
      </header>

      <div className={`${styles.overlay} ${openNav && styles.active}`}>
        <div className={styles.overlayContent}>
          <a href="#home">
            Home <span className={styles.lineThrough} />
          </a>
          <a href="#profile">
            Profile <span className={styles.lineThrough} />
          </a>
          <a href="#about">
            About <span className={styles.lineThrough} />
          </a>
          <a href="#contact">
            Contact <span className={styles.lineThrough} />
          </a>
          <div className={styles.socialGroup}>
            <a href="https://www.linkedin.com/in/nam-nguy%E1%BB%85n-4562b52a0/" target="_blank" className={styles.brandIcon}>
              <img src={LINKEDIN_ICON} />
            </a>
            <a href="https://www.instagram.com/namnungniuz/" target="_blank" className={styles.brandIcon}>
              <img src={INSTAGRAM_ICON} />
            </a>
            <a href="https://www.facebook.com/namgaxilem/" target="_blank" className={styles.brandIcon}>
              <img src={FACEBOOK_ICON} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
