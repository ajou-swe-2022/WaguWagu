import {
  MyContainer,
  SubItemContainer,
  InstructionContainer,
  EntranceContainer,
  SubContainer,
} from "./styles";
import { SubButton, MyButton } from "@Atoms/Buttons/Main";
import { SubButtonsBefore, SubButtonsAfter } from "@Constant/Main";

const renderSubButtons = (status) => {
  if (!status) {
    return SubButtonsBefore.map((el) => {
      return (
        <SubItemContainer>
          <SubButton btnName={el["btnName"]} linkTo={el["linkTo"]} />
        </SubItemContainer>
      );
    });
  } else {
    return SubButtonsAfter.map((el) => {
      return (
        <SubItemContainer>
          <SubButton btnName={el["btnName"]} linkTo={el["linkTo"]} />
        </SubItemContainer>
      );
    });
  }
};

const Entrance = ({ loginStatus, loginMessage, greetingsMessage }) => {
  return (
    <EntranceContainer>
      <InstructionContainer>
        {loginStatus ? greetingsMessage : loginMessage}
      </InstructionContainer>
      <MyContainer>
        <MyButton loginStatus={loginStatus} />
      </MyContainer>
      <SubContainer>{renderSubButtons(loginStatus)}</SubContainer>
    </EntranceContainer>
  );
};

export default Entrance;
