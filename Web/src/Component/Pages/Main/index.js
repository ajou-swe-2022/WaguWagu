import MainTemplate from "@Templates/Main";
import { useState, useEffect } from "react";
import { getCookie, USER_KEY } from "@Common/Util/cookie";

const Main = () => {
  const [loginStatus, setLoginStatus] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const status = getCookie(USER_KEY);
    if (status) {
      setLoginStatus(true);
    } else {
      setLoginStatus(false);
    }
  }, []);

  return (
    <>
      <MainTemplate
        loginStatus={loginStatus}
        loginMessage={"로그인 해주세요!"}
        greetingsMessage={"임준혁님 안녕하세요!"}
      ></MainTemplate>
    </>
  );
};

export default Main;
