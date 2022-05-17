import MainTemplate from "@Templates/Main";
import { useEffect } from "react";

const Main = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MainTemplate
        loginStatus={true}
        loginMessage={"로그인 해주세요!"}
        greetingsMessage={"임준혁님 안녕하세요!"}
      ></MainTemplate>
    </>
  );
};

export default Main;
