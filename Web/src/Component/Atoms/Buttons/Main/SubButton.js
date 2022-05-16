import { LinkContainer, SubButtonContainer } from "./styles";

const SubButton = ({ btnName, linkTo }) => {
  return (
    <LinkContainer to={linkTo}>
      <SubButtonContainer>{btnName}</SubButtonContainer>
    </LinkContainer>
  );
};

export default SubButton;
