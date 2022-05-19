import styled from "styled-components";

const FullFrame = styled.div`
  display: grid;
  place-items: center;
  min-height: 100vh;
`;

const LoginContainer = styled.div`
  width: 838px;
  height: 722px;
  position: relative;
  display: flex;
  justify-content: center;
  border: 3px solid #c0c0c0;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const VectorContainer = styled.img`
  width: 46px;
  height: 46px;
  position: absolute;
  top: 27px;
  left: 35px;
  &:hover {
    cursor: pointer;
  }
`;

const TitleContainer = styled.h1`
  display: block;
  position: absolute;
  top: 30px;
  font-weight: 800;
  font-size: 40px;
  text-align: center;
  color: #000000;
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 40px;
`;

export {
  LoginContainer,
  VectorContainer,
  TitleContainer,
  FullFrame,
  ButtonContainer,
};
