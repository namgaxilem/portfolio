import { useEffect, useLayoutEffect, useState } from "react";
import styles from "./styles.module.scss";

const MOON_ID = "moonContainer";
const MOON_COLOR = "#505052";

const moonConfigs = [
  {
    r: 50,
    fillOpacity: 0.15,
    cx: "70%",
    cy: "50%",
  },
  {
    r: 44,
    fillOpacity: 0.2,
    cx: "70%",
    cy: "50%",
  },
  {
    r: 38,
    fillOpacity: 0.25,
    cx: "70%",
    cy: "50%",
  },
  {
    r: 32,
    fillOpacity: 0.3,
    cx: "70%",
    cy: "50%",
  },
  {
    r: 26,
    fillOpacity: 0.35,
    cx: "70%",
    cy: "50%",
  },
  {
    r: 20,
    fillOpacity: 0.4,
    cx: "70%",
    cy: "50%",
  },
];

const moonConfigsSM = [
  {
    r: 80,
    fillOpacity: 0.15,
    cx: "50%",
    cy: "25%",
  },
  {
    r: 70,
    fillOpacity: 0.2,
    cx: "50%",
    cy: "25%",
  },
  {
    r: 60,
    fillOpacity: 0.25,
    cx: "50%",
    cy: "25%",
  },
  {
    r: 50,
    fillOpacity: 0.3,
    cx: "50%",
    cy: "25%",
  },
  {
    r: 40,
    fillOpacity: 0.35,
    cx: "50%",
    cy: "25%",
  },
  {
    r: 30,
    fillOpacity: 0.4,
    cx: "50%",
    cy: "25%",
  },
];

const dotStars = () => {
  return [...Array(25)].map(() => <circle cx={`${Math.random() * 100}%`} cy={`${Math.random() * 100}%`} r="0.2" fill="white" />);
};

export default function MoonBackground() {
  const [isSMScreen, setIsSMScreen] = useState(false);
  const [stars] = useState(dotStars());
  const [moonPosition, setMoonPosition] = useState<{ top: number | string; left: number | string }>({
    top: "auto",
    left: "auto",
  });
  const [initMoonPos, setInitMoonPos] = useState<DOMRect>();

  useEffect(() => {
    function handleScreenResize() {
      if (window.screen.width <= 768) {
        setIsSMScreen(true);
      } else {
        setIsSMScreen(false);
      }
    }

    function handleMouseMove(e) {
      let moonContainer = document.getElementById(MOON_ID);
      const centerOfMoonX = initMoonPos.right - initMoonPos.left;
      const centerOfMoonY = initMoonPos.bottom - initMoonPos.top;
      const distanceX = centerOfMoonX - e.x;
      const distanceY = centerOfMoonY - e.y;
      let newPosition = { left: "0px", top: "0px" };
      if (distanceX > 0) {
        newPosition.left = `${((window.screen.width - distanceX) / window.screen.width) * 100}px`;
      } else if (distanceX < 0) {
        newPosition.left = `${((distanceX - window.screen.width) / window.screen.width) * 100}px`;
      } else {
        newPosition.left = "0px";
      }
      if (distanceY > 0) {
        newPosition.top = `${((distanceY - window.screen.height) / window.screen.height) * 100}px`;
      } else if (distanceY < 0) {
        newPosition.top = `${((window.screen.height - distanceY) / window.screen.height) * 100}px`;
      } else {
        newPosition.top = "0px";
      }

      console.log(initMoonPos.left, initMoonPos.top, newPosition.left, newPosition.top);
      console.log(centerOfMoonY, newPosition.top);

      moonContainer.style.left = `${newPosition.left}`;
      moonContainer.style.top = `${newPosition.top}`;
    }

    function handleMouseOut(e) {
      let moonContainer = document.getElementById(MOON_ID);
      moonContainer.style.left = "0px";
      moonContainer.style.top = "0px";
    }

    window.addEventListener("resize", handleScreenResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      console.log("remove ne");
      window.removeEventListener("resize", handleScreenResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [initMoonPos]);

  useLayoutEffect(() => {
    const moonCircleBoundingClient = (document.getElementById(MOON_ID).firstElementChild.firstChild as SVGCircleElement).getBoundingClientRect();
    console.log("layout", moonCircleBoundingClient);
    setInitMoonPos(moonCircleBoundingClient);
  }, []);

  return (
    <>
      <div id={MOON_ID} className={styles.moonContainer} style={{ top: moonPosition.top, left: moonPosition.left }}>
        <svg viewBox={`0 0 100 100`} width={"100%"} height={"100%"}>
          {isSMScreen
            ? moonConfigsSM.map((e) => <circle cx={e.cx} cy={e.cy} r={e.r} fill={MOON_COLOR} style={{ fillOpacity: e.fillOpacity }} />)
            : moonConfigs.map((e) => <circle cx={e.cx} cy={e.cy} r={e.r} fill={MOON_COLOR} style={{ fillOpacity: e.fillOpacity }} />)}

          {...stars}
        </svg>
      </div>
    </>
  );
}
