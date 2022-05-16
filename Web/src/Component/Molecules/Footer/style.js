import styled from "styled-components";
import { FooterTextColor } from "@Style";

const PContainer = styled.p`
  display: block;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  text-align: start;
  color: ${FooterTextColor};
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const CallContainer = styled.div`
  margin-top: 22px;
  display: flex;
  flex-direction: column;
`;
const TextContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 38px;
  top: 38px;
`;

export { PContainer, TextContainer, InfoContainer, CallContainer };
