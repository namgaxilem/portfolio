import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { useLocation } from "react-router-dom";

const MOON_ID = "mainMoonContainer";
const MOON_COLOR = "#FFFFFA";

interface Props {
  pageNumber: string;
}

export default function MainMoon({ pageNumber }: Props) {
  const [isSMScreen, setIsSMScreen] = useState(false);
  const [initMoonPos, setInitMoonPos] = useState<DOMRect>();
  const resetMoving = useRef(Math.random());

  const location = useLocation();

  const checkHashChange = () => {
    const hash = location.hash.replace("#", "");
    if (
      (pageNumber === "01" && hash === "home") ||
      (pageNumber === "02" && hash === "profile") ||
      (pageNumber === "03" && hash === "about") ||
      (pageNumber === "04" && hash === "contact")
    ) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    function handleScreenResize() {
      const moonContainer = document.getElementById(MOON_ID);
      moonContainer.style.transform = null;

      if (window.screen.width <= 768) {
        setIsSMScreen(true);
      } else {
        setIsSMScreen(false);
      }
    }

    async function handleMouseMove(e) {
      resetMoving.current = Math.random();
      if (!initMoonPos) {
        return;
      }

      if (e.pointerType === "mouse") {
        const centerOfMoonX = (initMoonPos.left + initMoonPos.width) / 2;
        const centerOfMoonY = (initMoonPos.top + initMoonPos.height) / 2;
        const distanceX = centerOfMoonX - e.x;
        const distanceY = centerOfMoonY - e.y;
        const newPosition = { left: `${initMoonPos.left}px`, top: `${initMoonPos.top}px` };
        if (distanceX !== 0) {
          newPosition.left = `${((centerOfMoonX - e.x) / centerOfMoonX) * 20}px`;
        } else {
          newPosition.left = `${initMoonPos.left}px`;
        }
        if (distanceY !== 0) {
          newPosition.top = `${((centerOfMoonY - e.y) / centerOfMoonY) * 20}px`;
        } else {
          newPosition.top = `${initMoonPos.top}px`;
        }
        const moonContainer = window.document.getElementById(MOON_ID);
        moonContainer.style.transform = `translate3d(${newPosition.left}, ${newPosition.top}, 0px)`;
      } else if (e.pointerType === "touch") {
        e.preventDefault();
      }
    }

    handleScreenResize();

    window.addEventListener("resize", handleScreenResize);
    window.addEventListener("pointermove", handleMouseMove);
    return () => {
      window.removeEventListener("resize", handleScreenResize);
      window.removeEventListener("pointermove ", handleMouseMove);
    };
  }, [initMoonPos]);

  useLayoutEffect(() => {
    function handleScreenResize() {
      const moonCircleBoundingClient = (document.getElementById(MOON_ID).firstElementChild.firstChild as SVGCircleElement).getBoundingClientRect();
      setInitMoonPos(moonCircleBoundingClient);
    }
    handleScreenResize();

    window.addEventListener("resize", handleScreenResize);

    return () => {
      window.removeEventListener("resize", handleScreenResize);
    };
  }, [isSMScreen]);

  return (
    <>
      <div id={MOON_ID} className={styles.mainMoonContainer}>
        <svg className={`${styles.mainMoon} ${checkHashChange() ? styles.mainMoonRun : null}`} width="100%" height="100%" viewBox="0 0 100 100">
          <circle
            className={`${styles.mainMoonCircle} ${checkHashChange() ? styles.mainMoonCircleRun : styles.mainMoonRunRemove}`}
            cx={"50%"}
            cy={"50%"}
            r={20}
            fill={MOON_COLOR}
          />
        </svg>
      </div>
      <p className={`${styles.title} ${checkHashChange() ? styles.titleRun : null}`}>Portfolio</p>
    </>
  );
}
