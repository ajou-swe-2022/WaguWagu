import React from "react";
import Logo from "@Atoms/Logo";
import { LOGO_IMG_URL as Icon } from "@Constant";
import Swap from "@Organisms/Intro/Swap";
import Download from "@Organisms/Intro/Download";
import PromotionalText from "@Organisms/Intro/PromotionalText";
import ToHome from "@Organisms/Intro/ToHome";

const Intro = () => {
  return (
    <>
      <Logo location={Icon} />
      <Swap turn={2} />
      <Download
        forAppStore="App store Link"
        forPlayStore="Playstore store Link"
      />
      <PromotionalText promotion="HAHAHA" />
      <ToHome purpose="사장님 서비스" />
    </>
  );
};

export default Intro;
