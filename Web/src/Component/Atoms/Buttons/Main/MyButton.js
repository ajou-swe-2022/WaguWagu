import { LinkContainer, MyContainer } from "./styles";

const MyButton = ({ loginStatus }) => {
  if (!loginStatus) {
    return (
      <LinkContainer to="/login">
        <MyContainer>{"사장님 로그인 서비스"}</MyContainer>
      </LinkContainer>
    );
  } else {
    return (
      <LinkContainer to="/admin">
        <MyContainer>{"마이페이지"}</MyContainer>
      </LinkContainer>
    );
  }
};

export default MyButton;
