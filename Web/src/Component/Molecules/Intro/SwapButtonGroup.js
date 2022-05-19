import { SwapButton } from "@Atoms/Buttons/Intro";
import { INTRO_PAGE_COUNT } from "@Common/";
import { SwapContainer } from "./styles";

const SwapButtonGroup = ({ turn }) => {
  const renderSwapBtns = () => {
    const btns = [];
    for (let i = 1; i <= INTRO_PAGE_COUNT; ++i) {
      btns.push(<SwapButton className={`btn${i}`} isFocused={turn === i} />);
    }
    return btns;
  };

  return <SwapContainer>{renderSwapBtns().map((el) => el)}</SwapContainer>;
};

export default SwapButtonGroup;
