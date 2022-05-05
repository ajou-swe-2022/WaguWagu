import styled from "styled-components";
import { DefaultColor } from "@Style";

const SwapBtnContainer = styled.button`
  background-color: ${(props) => (props.clicked ? DefaultColor : "white")};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 0px;
  filter: drop-shadow(2px 2px 2px #000000);
  transition: 0.5s;
  &:hover {
    transform: scale(1.2);
    background-color: ${DefaultColor};
    opacity: 0.5;
  }
`;

const DownloadBtnContainer = styled.button`
  background-color: ${DefaultColor};
  color: white;
  width: 150px;
  height: 70px;
  border-radius: 25px;
  border: 0px;
  filter: drop-shadow(2px 2px 2px #000000);
  font-weight: 800;
  font-size: 30px;
  transition: 0.5s;
  &:hover {
    transform: scale(1.1);
    background-color: #ffffff;
    color: ${DefaultColor};
  }
`;

const ToHomeBtnContainer = styled.button`
  background-color: #ffffff;
  width: 316px;
  height: 69px;
  border-radius: 40px;
  border: 5px solid ${DefaultColor};
  filter: drop-shadow(2px 2px 2px #000000);
  box-sizing: border-box;
  font-weight: 800;
  font-size: 30px;
  transition: 0.2s;
  &:hover {
    background-color: ${DefaultColor};
    color: #ffffff;
  }
`;

export { SwapBtnContainer, DownloadBtnContainer, ToHomeBtnContainer };
