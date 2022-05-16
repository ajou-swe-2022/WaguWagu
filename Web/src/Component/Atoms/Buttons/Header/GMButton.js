import { LinkContainer, GMContainer } from "./styles";

const GMButton = ({ menuName, linkTo }) => {
  return (
    <GMContainer>
      <LinkContainer to={linkTo}>{menuName}</LinkContainer>
    </GMContainer>
  );
};

export default GMButton;
