import BlackCover from "@/components/BlackCover";
import MoonBackground from "@/components/MoonBackground";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HomeContent from "../../components/HomeContent";
import HomeMainBanner from "../../components/HomeMainBanner";
import HomeMainTitle from "../../components/HomeMainTitle";
import ScrollDown from "../../components/ScrollDown";
import About from "../About";
import Profile from "../Profile";
import Header from "./Header";
import NavigationBar from "./NavigationBar";
import styles from "./styles.module.scss";

const HOME_CONTAINER_ID = "homeContainer";

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const [touchStartClientY, setTouchStartClientY] = useState<number>(undefined);
  const [touchEndClientY, setTouchEndClientY] = useState<number>(undefined);
  const isNavigatingRef = useRef(false);

  const scrollUpOrDownOnScroll = (isDown: boolean) => {
    if (isNavigatingRef.current) {
      return;
    }
    isNavigatingRef.current = true;
    setTimeout(() => {
      isNavigatingRef.current = false;
    }, 1200);

    if (isDetailPage()) {
      return;
    }
    isDown ? console.info("Down") : console.info("Up");
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

  const onWheel = (e) => scrollUpOrDownOnScroll(e.deltaY > 0);

  const onTouchStart = (e) => setTouchStartClientY(e.changedTouches[0].clientY);

  const onTouchEnd = (e) => setTouchEndClientY(e.changedTouches[0].clientY);

  const isDetailPage = () => {
    const pathname = location.pathname;
    if (pathname !== "/") {
      return true;
    }
    return false;
  };

  const locationChangeHandler = () => {
    const hash = location.hash.replace("#", "");
    const pathname = location.pathname.replace("/", "");
    const homeContainerDiv = document.getElementById(HOME_CONTAINER_ID);
    let section: HTMLElement;
    if (hash) {
      section = document.getElementById(hash);
    } else if (pathname) {
      section = document.getElementById(pathname);
    }
    homeContainerDiv && homeContainerDiv.scrollTo(0, section.offsetTop);
  };

  useLayoutEffect(() => {
    locationChangeHandler();
  }, [location]);

  useEffect(() => {
    if (touchStartClientY && touchEndClientY && !(touchEndClientY === touchStartClientY)) {
      scrollUpOrDownOnScroll(touchEndClientY < touchStartClientY);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [touchEndClientY]);

  useEffect(() => {
    const pathname = location.pathname;
    const hash = location.hash;
    if (pathname === "/" && hash === "") {
      navigate("/#home");
    }
  }, []);

  return (
    <>
      <MoonBackground />
      <Header />
      <NavigationBar />
      <div id={HOME_CONTAINER_ID} className={`${styles.container}`} onWheel={onWheel} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
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
          <Profile />
        </HomeContent>
        <HomeContent id="about">
          <HomeMainTitle idAnchorPage="about" title="About Me" subTitle="I love coding and making things on the web" buttonTxt="Show me more" />
          <HomeMainBanner pageNumber={"03"} />
          <About />
        </HomeContent>
        <HomeContent id="contact">
          <HomeMainTitle idAnchorPage="contact" title="Contact" subTitle="Contact me" />
          <HomeMainBanner pageNumber={"04"} />
        </HomeContent>
      </div>
      <ScrollDown />
      <BlackCover />
    </>
  );
}
