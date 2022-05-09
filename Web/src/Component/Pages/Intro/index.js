import IntroTemplate from "@Templates/Intro";
import { IntroBanner } from "@Constant/";
import { SwapContainer } from "./styles";
import { Swap } from "@Organisms/Intro";
import { useState, useEffect } from "react";
import _ from "lodash";

const Intro = () => {
  const [curPage, setCurPage] = useState(1);

  const getNext = (cur) => {
    console.log("next!");
    if (cur < IntroBanner[0]) {
      window.scrollTo(0, window.innerHeight * (cur + 1));
      return cur + 1;
    }
    return cur;
  };

  const getPrev = (cur) => {
    if (cur !== 1) {
      window.scrollTo(0, window.innerHeight * (cur - 1));
      return cur - 1;
    }
    return cur;
  };

  const handleScroll = () => {
    console.log(`Y축 ${window.scrollY}`);
    console.log(`뷰포트 크기 ${window.innerHeight / 20}`);
    const flag = (curPage - 1) * window.innerHeight + window.innerHeight / 20;
    // 내려가는 경우
    if (window.scrollY > flag) {
      setCurPage(getNext);
    }
    // 올라가는 경우
    else {
      setCurPage(getPrev);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
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
