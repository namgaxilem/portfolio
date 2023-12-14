import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

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

  useEffect(() => {
    function handleScreenResize() {
      if (window.screen.width <= 768) {
        setIsSMScreen(true);
      } else {
        setIsSMScreen(false);
      }
    }

    window.addEventListener("resize", handleScreenResize);

    return () => {
      window.removeEventListener("resize", handleScreenResize);
    };
  }, []);

  return (
    <>
      <div className={styles.moonContainer}>
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
