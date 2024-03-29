import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

export default function Header() {
  const [openNav, setOpenNav] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [headerColorChange, setHeaderColorChange] = useState(false);

  const isDetailPage = () => {
    const pathname = location.pathname.replace("/", "");
    if (pathname) {
      return true;
    }
    return false;
  };

  async function scrollByY(endY, time) {
    const detailDiv = document.getElementById(location.pathname.replace("/", ""));
    const startY = detailDiv.scrollTop;
    const startTime = performance.now();
    const endTime = startTime + time;
    const distance = startY - endY;
    let currentY = startY;

    while (performance.now() < endTime) {
      const progress = (performance.now() - startTime) / time;
      currentY = startY - progress * distance;
      detailDiv.scrollTo(0, currentY);
      // wait for the next frame
      await new Promise(requestAnimationFrame);
    }
    detailDiv.scrollTo(0, endY);
    await new Promise((res) => setTimeout(res, 100));
  }

  const goBack = async () => {
    const detailDiv = document.getElementById(location.pathname.replace("/", ""));
    if (detailDiv.scrollTop !== 0) {
      await scrollByY(0, 500);
    }
    const hashToGo = location.pathname.replace("/", "");
    navigate(`/#${hashToGo}`);
  };

  useEffect(() => {
    function handleScroll() {
      const detailDiv = window.document.getElementById(location.pathname.replace("/", ""));
      if (detailDiv.scrollTop >= window.screen.height) {
        setHeaderColorChange(true);
      } else {
        setHeaderColorChange(false);
      }
    }
    const detailDiv = window.document.getElementById(location.pathname.replace("/", ""));
    detailDiv && detailDiv.addEventListener("scroll", handleScroll);

    return () => {
      detailDiv && detailDiv.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  return (
    <>
      <header className={`${styles.headerContainer} ${headerColorChange && !openNav && isDetailPage() ? styles.blackVersion : ""}`}>
        <a className={styles.myName}>Nam Nguyễn</a>
        <div className={styles.linkGroup}>
          <a
            href="https://www.facebook.com/namgaxilem"
            target="_blank"
            className={`${styles.brandIcon} ${headerColorChange && !openNav && isDetailPage() ? styles.blackVersion : ""}`}
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://github.com/namgaxilem"
            target="_blank"
            className={`${styles.brandIcon} ${headerColorChange && !openNav && isDetailPage() ? styles.blackVersion : ""}`}
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/nam-nguy%E1%BB%85n-4562b52a0"
            target="_blank"
            className={`${styles.brandIcon} ${headerColorChange && !openNav && isDetailPage() ? styles.blackVersion : ""}`}
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <div className={styles.hamburgerLines} onClick={() => setOpenNav(!openNav)}>
            <span
              className={`${styles.line} ${styles.line1} ${headerColorChange && !openNav && isDetailPage() ? styles.blackVersion : ""} ${openNav && styles.active}`}
            ></span>
            <span
              className={`${styles.line} ${styles.line2} ${headerColorChange && !openNav && isDetailPage() ? styles.blackVersion : ""} ${openNav && styles.active}`}
            ></span>
          </div>
        </div>
      </header>

      <span className={`${styles.backArrow} ${isDetailPage() ? "" : styles.hide}`} onClick={goBack}>
        <svg className={` ${isDetailPage() ? "" : styles.hide}`} width="100%" height="34" viewBox="0 0 67 34">
          <g
            fill="none"
            fill-rule="evenodd"
            className={styles.gEle}
            stroke={`${headerColorChange && !openNav ? "black" : "white"}`}
            stroke-linecap="round"
            transform="translate(2 1)"
          >
            <path stroke-width="2" d="M0,15.5533333 L64,15.5533333"></path>
            <polyline stroke-width="2" points="15.556 0 0 15.556 15.556 31.111"></polyline>
          </g>
        </svg>
      </span>

      <div className={`${styles.overlay} ${openNav && styles.active}`}>
        <div className={styles.overlayContent}>
          <a onClick={() => setOpenNav(false)} href="/#home">
            <span className={`${styles.linkText} ${openNav ? styles.active : ""}`}>Home</span> <span className={styles.lineThrough} />
          </a>
          <a onClick={() => setOpenNav(false)} href="/#profile">
            <span className={`${styles.linkText} ${openNav ? styles.active : ""}`}>Profile</span> <span className={styles.lineThrough} />
          </a>
          <a onClick={() => setOpenNav(false)} href="/#about">
            <span className={`${styles.linkText} ${openNav ? styles.active : ""}`}>About</span> <span className={styles.lineThrough} />
          </a>
          <a onClick={() => setOpenNav(false)} href="/#contact">
            <span className={`${styles.linkText} ${openNav ? styles.active : ""}`}>Contact</span> <span className={styles.lineThrough} />
          </a>
          <div className={styles.socialGroup}>
            <a href="https://www.facebook.com/namgaxilem" target="_blank" className={styles.brandIcon}>
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://github.com/namgaxilem" target="_blank" className={styles.brandIcon}>
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/nam-nguy%E1%BB%85n-4562b52a0" target="_blank" className={styles.brandIcon}>
              <i className="fa-brands fa-linkedin-in"></i>{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
