import { SwapBtnContainer } from "./styles";

const SwapButton = ({ isFocused }) => {
  return <SwapBtnContainer clicked={isFocused}></SwapBtnContainer>;
};

export default SwapButton;
