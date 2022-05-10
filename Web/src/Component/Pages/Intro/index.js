import IntroTemplate from "@Templates/Intro";
import { IntroBanner } from "@Constant/";
import { SwapContainer } from "./styles";
import { Swap } from "@Organisms/Intro";
import { useState, useEffect } from "react";

const Intro = () => {
  const [curPage, setCurPage] = useState(1);
  const [nextFlag, setNextFlag] = useState(window.innerHeight / 20);
  const [beforeFlag, setBeforeFlag] = useState(0);

  const getNext = (cur) => {
    const frame = window.innerHeight;
    if (cur < IntroBanner[0]) {
      window.scrollTo(0, frame * cur);
      setNextFlag(frame * cur + frame / 8);
      setBeforeFlag(frame * cur - frame / 8);
      return cur + 1;
    }
    return cur;
  };

  const getPrev = (cur) => {
    const frame = window.innerHeight;
    if (cur !== 1) {
      cur -= 1;
      window.scrollTo(0, frame * cur);
      setNextFlag(frame * (cur - 1) + frame / 8);
      setBeforeFlag(frame * (cur - 1) - frame / 8);
      return cur - 1;
    }
    return cur;
  };

  const handleScroll = () => {
    if (window.scrollY > nextFlag) {
      setCurPage(getNext);
    }
    if (window.scrollY < beforeFlag) {
      setCurPage(getPrev);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <IntroTemplate turn={1} />
      <IntroTemplate turn={2} />
      <IntroTemplate turn={3} />
      <IntroTemplate turn={4} />
      <SwapContainer>
        <Swap turn={curPage} />
      </SwapContainer>
    </>
  );
};

export default Intro;
