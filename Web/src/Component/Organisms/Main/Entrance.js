import {
  MyContainer,
  InstructionContainer,
  EntranceContainer,
  SubContainer,
} from "./styles";
import { BasicSubmenuStyles } from "./constant";
import MyButton from "@Atoms/Buttons/Main";
import SubMenu from "@Organisms/Before";

const Entrance = ({ loginStatus, loginMessage, greetingsMessage }) => {
  const SubMenuStyles = {
    loginStatus: loginStatus,
    ...BasicSubmenuStyles,
  };

  return (
    <EntranceContainer>
      <InstructionContainer>
        {loginStatus ? greetingsMessage : loginMessage}
      </InstructionContainer>
      <MyContainer>
        <MyButton loginStatus={loginStatus} />
      </MyContainer>
      <SubContainer>{SubMenu({ ...SubMenuStyles })}</SubContainer>
    </EntranceContainer>
  );
};

export default Entrance;
