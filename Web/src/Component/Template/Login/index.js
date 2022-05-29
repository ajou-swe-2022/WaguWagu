import {
  LoginContainer,
  VectorContainer,
  TitleContainer,
  FullFrame,
  ButtonContainer,
} from "./styles";
import { InputFrame } from "@Organisms/Login";
import { Button } from "@Atoms/Buttons/";
import { LEFT_ARROW_VECTOR } from "@Common/";
import { TITLE, INNER_LEFT, INNER_TOP, SubmitBtnStyles } from "./constant";
import { postAccountInfo } from "@API/";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { setCookie, USER_KEY, USER_NAME } from "@Common/Util/cookie";

const LoginTemplate = () => {
  const [sustainLogin, setSustainLogin] = useState(false);

  const [ID, setID] = useState("");
  const [PW, setPW] = useState("");
  const navigate = useNavigate();

  const handleSustainLogin = (e) => {
    setSustainLogin(e.target.checked);
  };

  const handleIDChange = (e) => {
    setID(e.target.value);
  };

  const handlePWChange = (e) => {
    setPW(e.target.value);
  };

  const handleLogin = async (e) => {
    await postAccountInfo({ email: ID, password: PW })
      .then((res) => {
        console.log(res);
        setCookie(USER_KEY, res.data.id, { path: "/" });
        setCookie(USER_NAME, res.data.name, { path: "/" });
        navigate("/main");
      })
      .catch((rej) => {
        alert("아이디/비밀번호를 다시확인해주세요!");
        return;
      });
  };

  const handleSubmenu = (menuName, linkTo) => {
    navigate(linkTo);
  };

  return (
    <FullFrame>
      <LoginContainer>
        <VectorContainer
          src={LEFT_ARROW_VECTOR}
          onClick={() => {
            navigate(-1);
          }}
        />
        <TitleContainer>{TITLE}</TitleContainer>
        <InputFrame
          top={INNER_TOP}
          left={INNER_LEFT}
          handleSustainLogin={handleSustainLogin}
          sustainLogin={sustainLogin}
          handleIDChange={handleIDChange}
          handlePWChange={handlePWChange}
          onClick={handleSubmenu}
        />
        <ButtonContainer>
          <Button {...SubmitBtnStyles} onClick={handleLogin}>
            {"로그인"}
          </Button>
        </ButtonContainer>
      </LoginContainer>
    </FullFrame>
  );
};

export default LoginTemplate;
