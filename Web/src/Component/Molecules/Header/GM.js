import { GMContainer } from "./styles";
import { GMButton } from "@Atoms/Buttons/Header/";
import { GMInnerBefore, GMInnerAfter } from "./constant";

const renderItems = (status, onClick) => {
  if (!status) {
    return GMInnerBefore.map((el) => {
      return <GMButton menuName={el.menuName} linkTo={el.linkTo} onClick={onClick}></GMButton>;
    });
  } else {
    return GMInnerAfter.map((el) => {
      return <GMButton menuName={el.menuName} linkTo={el.linkTo} onClick={onClick}></GMButton>;
    });
  }
};

const GM = ({ loginStatus, onClick }) => {
  return <GMContainer>{renderItems(loginStatus, onClick)}</GMContainer>;
};

export default GM;
