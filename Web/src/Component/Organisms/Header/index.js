import HeaderContainer from "./style";
import { Title, GNB, GM } from "@Molecules/Header";

const Header = ({ loginStatus, onClick }) => {
  return (
    <HeaderContainer>
      <Title />
      <GNB />
      <GM loginStatus={loginStatus} onClick={onClick}/>
    </HeaderContainer>
  );
};

export default Header;
