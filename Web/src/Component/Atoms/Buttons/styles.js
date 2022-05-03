import styled from "styled-components";
import { DefaultColor } from "@Style";

const IntroBtnContainer = styled.button`
  background-color: ${(props) => (props.clicked ? DefaultColor : "white")};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 0px;
  filter: drop-shadow(2px 2px 2px #000000);
`;

const DownloadBtnContainer = styled.button`
  background-color: #c4c4c4;
  width: 276px;
  height: 121px;
  border-radius: 30px;
  border: 0px;
  filter: drop-shadow(2px 2px 2px #000000);
  font-weight: 800;
  font-size: 30px;
`;

export { IntroBtnContainer, DownloadBtnContainer };
