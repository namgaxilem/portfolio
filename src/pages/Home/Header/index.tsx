import { useState } from "react";
import styles from "./styles.module.scss";
import INSTAGRAM_ICON from "@/assets/instagram-icon.png";
import FACEBOOK_ICON from "@/assets/facebook-icon.png";
import LINKEDIN_ICON from "@/assets/linkedin-icon.png";

export default function Header() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <header className={styles.headerContainer}>
        <a className={styles.myName}>Nam Nguyễn</a>
        <div className={styles.linkGroup}>
          <a
            href="https://www.linkedin.com/in/nam-nguy%E1%BB%85n-4562b52a0/"
            target="_blank"
            className={styles.brandIcon}
          >
            <img src={LINKEDIN_ICON} />
          </a>
          <a
            href="https://www.instagram.com/namnungniuz/"
            target="_blank"
            className={styles.brandIcon}
          >
            <img src={INSTAGRAM_ICON} />
          </a>
          <a
            href="https://www.facebook.com/namgaxilem/"
            target="_blank"
            className={styles.brandIcon}
          >
            <img src={FACEBOOK_ICON} />
          </a>

          <div
            className={styles.hamburgerLines}
            onClick={() => setOpenNav(!openNav)}
          >
            <span
              className={`${styles.line} ${styles.line1} ${
                openNav && styles.active
              }`}
            ></span>
            <span
              className={`${styles.line} ${styles.line2} ${
                openNav && styles.active
              }`}
            ></span>
          </div>
        </div>
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
            <a
              href="https://www.linkedin.com/in/nam-nguy%E1%BB%85n-4562b52a0/"
              target="_blank"
              className={styles.brandIcon}
            >
              <img src={LINKEDIN_ICON} />
            </a>
            <a
              href="https://www.instagram.com/namnungniuz/"
              target="_blank"
              className={styles.brandIcon}
            >
              <img src={INSTAGRAM_ICON} />
            </a>
            <a
              href="https://www.facebook.com/namgaxilem/"
              target="_blank"
              className={styles.brandIcon}
            >
              <img src={FACEBOOK_ICON} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
