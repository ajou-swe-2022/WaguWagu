import SwapButtonGroup from "@Molecules/Intro/SwapButtonGroup";
import { SwapContainer } from "./styles";

const Swap = ({ turn }) => {
  return (
    <SwapContainer>
      <SwapButtonGroup turn={turn} />
    </SwapContainer>
  );
};

export default Swap;
