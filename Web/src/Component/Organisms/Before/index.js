import { SubContainer, SubItemContainer } from "./styles";
import { SubButtonsBefore, SubButtonsAfter } from "./constant";
import { SubButton } from "@Atoms/Buttons";

const renderSubButtons = (status, color, weight, size) => {
  if (!status) {
    return SubButtonsBefore.map((el) => {
      return (
        <SubItemContainer>
          <SubButton
            btnName={el["btnName"]}
            linkTo={el["linkTo"]}
            color={color}
            weight={weight}
            size={size}
          />
        </SubItemContainer>
      );
    });
  } else {
    return SubButtonsAfter.map((el) => {
      return (
        <SubItemContainer>
          <SubButton
            btnName={el["btnName"]}
            linkTo={el["linkTo"]}
            color={color}
            weight={weight}
            size={size}
          />
        </SubItemContainer>
      );
    });
  }
};

const SubMenu = ({ loginStatus, color, weight, size }) => {
  return (
    <SubContainer>
      {renderSubButtons(loginStatus, color, weight, size)}
    </SubContainer>
  );
};

export default SubMenu;
