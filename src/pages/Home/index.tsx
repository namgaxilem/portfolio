import { useEffect, useState } from "react";
import HomeContent from "../../components/HomeContent";
import ScrollDown from "../../components/ScrollDown";
import Header from "./Header";
import NavigationBar from "./NavigationBar";
import styles from "./styles.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import HomeMainTitle from "../../components/HomeMainTitle";
import HomeMainBanner from "../../components/HomeMainBanner";

const HOME_CONTAINER_ID = "homeContainer";

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const [touchStartClientY, setTouchStartClientY] = useState<number>(undefined);
  const [touchEndClientY, setTouchEndClientY] = useState<number>(undefined);

  const onWheel = (e) => {
    e.deltaY > 0 ? console.log("Down") : console.log("Up");
    scrollUpOrDownOnScroll(e.deltaY > 0);
  };

  const onTouchStart = (e) => {
    setTouchStartClientY(e.changedTouches[0].clientY);
  };

  const onTouchEnd = (e) => {
    setTouchEndClientY(e.changedTouches[0].clientY);
  };

  const scrollUpOrDownOnScroll = (isDown: boolean) => {
    setTouchStartClientY(undefined);
    setTouchEndClientY(undefined);
    const section = document.getElementById(HOME_CONTAINER_ID);
    const idList: string[] = [];
    const currentHash = (location.hash === "" ? "#home" : location.hash).replace("#", "");
    for (let i = 0; i < section.childNodes.length; i++) {
      const clone = section.childNodes[i].cloneNode(true) as HTMLElement;
      if (clone.id) {
        idList.push(clone.id);
      }
    }
    const currentPageIndex = idList.indexOf(currentHash);
    let targetPageIndex = -1;

    if (isDown) {
      targetPageIndex = currentPageIndex + 1;
    } else {
      targetPageIndex = currentPageIndex - 1;
    }

    if (targetPageIndex < 0 || targetPageIndex >= idList.length) {
      return;
    }

    navigate(`/#${idList[targetPageIndex]}`);
  };

  useEffect(() => {
    const section = document.getElementById(location.hash.replace("#", ""));
    section && section.scrollIntoView({ behavior: "smooth" });
    console.log("location", location);
  }, [location]);

  useEffect(() => {
    if (touchStartClientY && touchEndClientY && !(touchEndClientY === touchStartClientY)) {
      scrollUpOrDownOnScroll(touchEndClientY < touchStartClientY);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [touchEndClientY]);

  return (
    <>
      <Header />
      <NavigationBar />
      <div id={HOME_CONTAINER_ID} className={styles.container} onWheel={onWheel} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <HomeContent id="home">
          <HomeMainTitle
            idAnchorPage="home"
            title="Nam Nguyen"
            subTitle="fullstack developer / &#13;&#10; web engineer"
          />
          <HomeMainBanner pageNumber={"01"} />
        </HomeContent>
        <HomeContent id="profile">
          <HomeMainTitle idAnchorPage="profile" title="My Profile" subTitle="Check out my projects here" buttonTxt="Show me more" />
          <HomeMainBanner pageNumber={"02"} />
        </HomeContent>
        <HomeContent id="about">
          <HomeMainTitle idAnchorPage="about" title="About Me" subTitle="I love coding and making things on the web" buttonTxt="Show me more" />
          <HomeMainBanner pageNumber={"03"} />
        </HomeContent>
        <HomeContent id="contact">
          <HomeMainTitle idAnchorPage="contact" title="Contact" subTitle="Contact me" />
          <HomeMainBanner pageNumber={"04"} />
        </HomeContent>
      </div>
      <ScrollDown />
    </>
  );
}
