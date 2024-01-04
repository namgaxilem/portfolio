import { useEffect, useLayoutEffect, useState } from "react";
import styles from "./styles.module.scss";

const MOON_ID = "moonContainer";
const MOON_COLOR = "#505052";

const moonConfigs = [
  {
    r: 50,
    fillOpacity: 0.15,
    cx: "50%",
    cy: "50%",
  },
  {
    r: 44,
    fillOpacity: 0.2,
    cx: "50%",
    cy: "50%",
  },
  {
    r: 38,
    fillOpacity: 0.25,
    cx: "50%",
    cy: "50%",
  },
  {
    r: 32,
    fillOpacity: 0.3,
    cx: "50%",
    cy: "50%",
  },
  {
    r: 26,
    fillOpacity: 0.35,
    cx: "50%",
    cy: "50%",
  },
  {
    r: 20,
    fillOpacity: 0.4,
    cx: "50%",
    cy: "50%",
  },
];

const dotStars = () => {
  return [...Array(25)].map(() => <circle cx={`${Math.random() * 100}%`} cy={`${Math.random() * 100}%`} r="0.2" fill="white" />);
};

export default function MoonBackground() {
  const [isSMScreen, setIsSMScreen] = useState(false);
  const [stars] = useState(dotStars());
  const [initMoonPos, setInitMoonPos] = useState<DOMRect>();

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
      if (!initMoonPos) {
        return;
      }

      async function scrollByTime(endX, endY, time) {
        const moonContainer = window.document.getElementById(MOON_ID);
        const startTime = performance.now();
        const endTime = startTime + time;
        const startX = Number(window.getComputedStyle(moonContainer).getPropertyValue("left").replace("px", ""));
        const startY = Number(window.getComputedStyle(moonContainer).getPropertyValue("top").replace("px", ""));
        const distanceX = startX - endX;
        const distanceY = startY - endY;
        let currentX = startX;
        let currentY = startY;

        while (performance.now() < endTime) {
          const progress = (performance.now() - startTime) / time;
          currentX = startX - progress * distanceX;
          currentY = startY - progress * distanceY;
          moonContainer.style.transform = `translate3d(${currentX}px, ${currentY}, 0px)`;
          console.log("currentX", currentX);

          requestAnimationFrame(() =>{});
          // moonContainer.style.left = `${currentX}px`;
          // moonContainer.style.top = `${currentY}px`;
          await new Promise(requestAnimationFrame);
        }
        moonContainer.style.transform = `translate3d(${endX}px, ${endY}px, 0px)`;
        // moonContainer.style.left = `${endX}px`;
        // moonContainer.style.top = `${endY}px`;
      }

      if (e.pointerType === "mouse") {
        const moonContainer = document.getElementById(MOON_ID);
        const centerOfMoonX = (initMoonPos.right - initMoonPos.left) / 2;
        const centerOfMoonY = (initMoonPos.bottom - initMoonPos.top) / 2;
        const distanceX = centerOfMoonX - e.x;
        const distanceY = centerOfMoonY - e.y;
        const newPosition = { left: `${initMoonPos.left}px`, top: `${initMoonPos.top}px` };
        if (distanceX !== 0) {
          newPosition.left = `${((centerOfMoonX - e.x) / centerOfMoonX) * 60}px`;
        } else {
          newPosition.left = `${initMoonPos.left}px`;
        }
        if (distanceY !== 0) {
          newPosition.top = `${((centerOfMoonY - e.y) / centerOfMoonY) * 60}px`;
        } else {
          newPosition.top = `${initMoonPos.top}px`;
        }
        // moonContainer.style.transform = `translate3d(${newPosition.left}, ${newPosition.top}, 0px)`;
        await scrollByTime(
          newPosition.left.replace("px", ""),
          newPosition.top.replace("px", ""),
          4000
        );
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
      console.log("condime", moonCircleBoundingClient);
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
      <div id={MOON_ID} className={styles.moonContainer}>
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          {moonConfigs.map((e) => (
            <circle cx={e.cx} cy={e.cy} r={e.r} fill={MOON_COLOR} style={{ fillOpacity: e.fillOpacity }} />
          ))}
          {...stars}
        </svg>
      </div>
    </>
  );
}
