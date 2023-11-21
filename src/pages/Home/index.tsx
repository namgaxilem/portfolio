import { useEffect, useState } from "react";
import HomeContent from "../../components/HomeContent";
import ScrollDown from "../../components/ScrollDown";
import Header from "./Header";
import NavigationBar from "./NavigationBar";
import styles from "./styles.module.scss";
import { useLocation, useNavigate } from "react-router-dom";

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
    const currentHash = (
      location.hash === "" ? "#home" : location.hash
    ).replace("#", "");
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
  }, [location]);

  useEffect(() => {
    if (touchStartClientY && touchEndClientY) {
      scrollUpOrDownOnScroll(touchEndClientY < touchStartClientY);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [touchEndClientY]);

  return (
    <>
      <Header />
      <NavigationBar />
      <div
        id={HOME_CONTAINER_ID}
        className={styles.container}
        onWheel={onWheel}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <HomeContent id="home">home</HomeContent>
        <HomeContent id="profile">profile</HomeContent>
        <HomeContent id="about">about</HomeContent>
        <HomeContent id="contact">contact</HomeContent>
      </div>
      <ScrollDown />
    </>
  );
}
