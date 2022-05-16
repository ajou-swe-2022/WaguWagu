import { LinkContainer, MyContainer } from "./styles";

const MyButton = ({ status }) => {
  if (!status) {
    return (
      <LinkContainer to="/login">
        <MyContainer>{"사장님 로그인 서비스"}</MyContainer>
      </LinkContainer>
    );
  }
  return (
    <LinkContainer to="/mypage">
      <MyContainer>{"마이페이지"}</MyContainer>
    </LinkContainer>
  );
};

export default MyButton;
