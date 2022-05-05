import { SwapButton } from "@Atoms/Buttons";
import { SwapContainer } from "./styles";

const SwapButtonGroup = ({ turn }) => {
  return (
    <SwapContainer>
      <SwapButton className="btn1" onClick={turn === 1} />
      <SwapButton className="btn2" onClick={turn === 2} />
      <SwapButton className="btn3" onClick={turn === 3} />
      <SwapButton className="btn4" onClick={turn === 4} />
    </SwapContainer>
  );
};

export default SwapButtonGroup;
