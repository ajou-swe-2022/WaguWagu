import { GNBContainer } from "./styles";
import { GNBInner } from "@Constant/Header";
import { GNBButton } from "@Atoms/Buttons/Header";

const renderItems = () => {
  return GNBInner.map((el) => {
    return <GNBButton menuName={el.text}></GNBButton>;
  });
};

const GNB = () => {
  return <GNBContainer>{renderItems()}</GNBContainer>;
};

export default GNB;
