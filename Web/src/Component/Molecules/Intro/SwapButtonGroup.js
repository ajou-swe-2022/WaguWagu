import { SwapButton } from "@Atoms/Buttons";
import { IntroBanner } from "@Constant/";
import { SwapContainer } from "./styles";

const SwapButtonGroup = ({ turn }) => {
  const renderSwapBtns = () => {
    const btns = [];
    for (let i = 1; i <= IntroBanner[0]; ++i) {
      btns.push(<SwapButton className={`btn${i}`} isFocused={turn === i} />);
    }
    return btns;
  };

  return <SwapContainer>{renderSwapBtns().map((el) => el)}</SwapContainer>;
};

export default SwapButtonGroup;
