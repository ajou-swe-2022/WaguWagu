import { BasicButton, SubButtonContainer } from "./styles";

const SubButton = ({ btnName, linkTo, color, weight, size }) => {
  return (
    <SubButtonContainer to={linkTo} color={color} weight={weight} size={size}>
      {btnName}
    </SubButtonContainer>
  );
};

const Button = (props) => {
  return <BasicButton {...props}></BasicButton>;
};

export { Button, SubButton };
