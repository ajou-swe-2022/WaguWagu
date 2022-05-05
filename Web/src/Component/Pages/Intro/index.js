import { useState, useEffect } from "react";
import IntroTemplate from "@Templates/Intro";
import { IntroBanner, LOGO_IMG_URL } from "@Constant";

const Intro = () => {
  const [page, setPage] = useState(1);

  const pageMove = (cnt) => {
    if (cnt === 4) return cnt;
    else return cnt + 1;
  };

  useEffect(() => {}, []);

  return (
    <>
      <IntroTemplate
        backgroundURL={IntroBanner[page].background}
        turn={page}
        logoURL={LOGO_IMG_URL}
      />
    </>
  );
};

export default Intro;
