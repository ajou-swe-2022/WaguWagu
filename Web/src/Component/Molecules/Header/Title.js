import { LinkContainer, TitleContainer, TitleTextContainer } from "./styles";
import Logo from "@Atoms/Logo";

const Title = () => {
  return (
    <TitleContainer>
      <LinkContainer to="/main">
        <Logo />
      </LinkContainer>
      <LinkContainer to="/main">
        <TitleTextContainer>와구와구</TitleTextContainer>
      </LinkContainer>
    </TitleContainer>
  );
};

export default Title;
