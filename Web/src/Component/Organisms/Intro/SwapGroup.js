import { useEffect, useState } from "react";
import { SwapButton } from "@Atoms/Buttons";

const SwapGroup = ({ clickedBtn }) => {
  const [coloredBtn, setColoredBtn] = useState(1);
  const [swaps, setSwaps] = useState(() => {
    const btns = [];
    btns.push(<SwapButton onClick={true} className={`swapBtn1`} />);
    for (let i = 2; i < 5; ++i)
      btns.push(<SwapButton onClick={false} className={`swapBtn${i}`} />);
    return btns;
  });

  const circular = (cnt) => {
    if (cnt === 4) return 0;
    else return cnt + 1;
  };

  useEffect(() => {}, []);

  return (
    <div className="SwapGroup">
      {swaps.forEach((el) => {
        return el;
      })}
    </div>
  );
};

export default SwapGroup;
