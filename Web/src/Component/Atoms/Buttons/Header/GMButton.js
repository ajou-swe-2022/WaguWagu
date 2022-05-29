import { GMContainer } from "./styles";

const GMButton = ({ menuName, onClick, linkTo}) => {
  const handleOnClick = () => {
    onClick(menuName, linkTo)
  }
  return <GMContainer onClick={handleOnClick}>{menuName}</GMContainer>;
};

export default GMButton;
