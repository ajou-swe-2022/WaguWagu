import React from "react";
import SwapButton from "@Atoms/Buttons/Swap";
import DownloadButton from "@Atoms/Buttons/Download";
import Logo from "@Atoms/Logo";
import SwapGroup from "@Organisms/Intro/SwapGroup";
import { LOGO_IMG_URL as Icon } from "@Constant";

const Intro = () => {
  return (
    <>
      <SwapButton onClick={false} />
      <SwapButton onClick={true} />
      <DownloadButton purpose="App store Link" />
      <DownloadButton purpose="Playstore store Link" />
      <Logo location={Icon} />
      <SwapGroup clickedBtn={0} />
    </>
  );
};

export default Intro;
