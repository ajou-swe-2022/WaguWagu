import { GMContainer } from "./styles";
import { GMButton } from "@Atoms/Buttons/Header/";
import { GMInnerBefore, GMInnerAfter } from "./constant";

const renderItems = (status) => {
  if (!status) {
    return GMInnerBefore.map((el) => {
      return <GMButton menuName={el.menuName} linkTo={el.linkTo}></GMButton>;
    });
  } else {
    return GMInnerAfter.map((el) => {
      return <GMButton menuName={el.menuName} linkTo={el.linkTo}></GMButton>;
    });
  }
};

const GM = ({ loginStatus }) => {
  return <GMContainer>{renderItems(loginStatus)}</GMContainer>;
};

export default GM;
