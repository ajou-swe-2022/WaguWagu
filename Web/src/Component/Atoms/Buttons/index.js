import { BasicButton, SubButtonContainer } from "./styles";

const SubButton = ({ btnName, linkTo, onClick, color, weight, size }) => {

  const handleOnClick = () => {
    onClick(btnName, linkTo);
  };

  return (
    <SubButtonContainer onClick={handleOnClick} color={color} weight={weight} size={size}>
      {btnName}
    </SubButtonContainer>
  );
};

const Button = (props) => {
  return <BasicButton {...props}></BasicButton>;
};

export { Button, SubButton };
