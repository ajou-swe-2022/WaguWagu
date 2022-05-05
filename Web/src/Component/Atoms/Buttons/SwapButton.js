import { useState, useEffect } from "react";
import { SwapBtnContainer } from "./styles";

const SwapButton = ({ isFocused }) => {
  const [isClicked, setIsClicked] = useState(false);

  const changeClickState = () => {
    setIsClicked(!isClicked);
    console.log(isClicked);
  };

  return (
    <SwapBtnContainer
      clicked={isFocused}
      onClick={changeClickState}
    ></SwapBtnContainer>
  );
};

export default SwapButton;
