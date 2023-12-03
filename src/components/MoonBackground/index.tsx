import { useLocation } from "react-router-dom";
import styles from "./styles.module.scss";

export default function MoonBackground() {
  const location = useLocation();

  const isShowScrollDown = () => {
    if ((location.pathname === "/" && !["#profile", "#about", "#contact"].includes(location.hash)) || location.pathname !== "/") {
      return true;
    }
    return false;
  };

  return (
    <>
      <div className={styles.moonContainer}>
        <div className="moon__img js-parallax-moon">
          <div className="moon__front layer" data-depth="0.2">
            <div className="moon__text-wrap">
              <p className="moon__text js-moon" data-depth="0.5">
                PORTFOLIO
              </p>
            </div>
          </div>
          <div className="moon__front layer" data-depth="0.8">
            <div className="cloud cloud--front1 js-moon">
              <img src="./assets/img/cloud1.svg" alt="cloud" />
            </div>
          </div>
          <div className="moon__back layer" data-depth="0.4">
            <div className="cloud cloud--back2 js-moon">
              <img src="./assets/img/b_cloud02.svg" alt="cloud" />
            </div>
          </div>
          <div className="moon__front layer" data-depth="0.6">
            <div className="cloud cloud--front2 js-moon">
              <img src="./assets/img/cloud2.svg" alt="cloud" />
            </div>
          </div>
          <div className="moon__back layer" data-depth="0.5">
            <img className="js-moon" src="./assets/img/moon.svg" alt="moon" />
          </div>
          <div className="moon__front layer" data-depth="0.7">
            <div className="cloud cloud--front3 js-moon">
              <img src="./assets/img/cloud3.svg" alt="cloud" />
            </div>
          </div>
          <div className="moon__back layer" data-depth="0.3">
            <div className="cloud cloud--back1 js-moon">
              <img src="./assets/img/b_cloud01.svg" alt="cloud" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
