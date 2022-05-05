import { SwapButton } from "@Atoms/Buttons";
import { SwapContainer } from "./styles";

const SwapButtonGroup = ({ turn }) => {
  return (
    <SwapContainer>
      <SwapButton className="btn1" isFocused={turn === 1} />
      <SwapButton className="btn2" isFocused={turn === 2} />
      <SwapButton className="btn3" isFocused={turn === 3} />
      <SwapButton className="btn4" isFocused={turn === 4} />
    </SwapContainer>
  );
};

export default SwapButtonGroup;
