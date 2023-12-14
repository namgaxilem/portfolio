import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

const MOON_ID = "moonContainer";
const MOON_COLOR = "#505052";

const moonConfigs = [
  {
    r: 60,
    fillOpacity: 0.15,
    cx: "70%",
    cy: "50%",
  },
  {
    r: 54,
    fillOpacity: 0.2,
    cx: "70%",
    cy: "50%",
  },
  {
    r: 48,
    fillOpacity: 0.25,
    cx: "70%",
    cy: "50%",
  },
  {
    r: 42,
    fillOpacity: 0.3,
    cx: "70%",
    cy: "50%",
  },
  {
    r: 36,
    fillOpacity: 0.35,
    cx: "70%",
    cy: "50%",
  },
  {
    r: 30,
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
  const [moonPosition, setMoonPosition] = useState({
    top: "auto",
    left: "auto",
  });

  useEffect(() => {
    const moonCircle = document.getElementById(MOON_ID).firstElementChild.firstChild as SVGCircleElement;
    function handleScreenResize() {
      if (window.screen.width <= 768) {
        setIsSMScreen(true);
      } else {
        setIsSMScreen(false);
      }
    }

    function handleMouseMove(e) {
      console.log(moonCircle.getBoundingClientRect());
      const screenWidth = window.screen.width;
      const screenHeight = window.screen.height;
      // setMoonPosition({ left: e.x, top: e.y });
    }

    function handleMouseOut(e) {
      setMoonPosition({ left: "auto", top: "auto" });
    }

    window.addEventListener("resize", handleScreenResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("resize", handleScreenResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      <div id={MOON_ID} className={styles.moonContainer} style={{ top: moonPosition.top, left: moonPosition.left }}>
        <svg viewBox="0 0 100 100" width={"auto"} height={"auto"}>
          {isSMScreen
            ? moonConfigsSM.map((e) => <circle cx={e.cx} cy={e.cy} r={e.r} fill={MOON_COLOR} style={{ fillOpacity: e.fillOpacity }} />)
            : moonConfigs.map((e) => <circle cx={e.cx} cy={e.cy} r={e.r} fill={MOON_COLOR} style={{ fillOpacity: e.fillOpacity }} />)}

          {...stars}
        </svg>
      </div>
    </>
  );
}
