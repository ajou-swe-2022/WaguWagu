import HeaderContainer from "./style";
import { Title, GNB, GM } from "@Molecules/Header";

const Header = ({ loginStatus }) => {
  return (
    <HeaderContainer>
      <Title />
      <GNB />
      <GM loginStatus={loginStatus} />
    </HeaderContainer>
  );
};

export default Header;
