import { css } from "styled-components";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { DefaultColor } from "@Style/";

const Mixin = ({ weight, size, align, color }) => css`
  font-weight: ${weight};
  font-size: ${size}px;
  text-align: ${align};
  color: ${color};
  &:hover {
    cursor: pointer;
  }
`;

const LinkContainer = styled(Link)``;

const MyContainer = styled.div`
  ${Mixin({ weight: 800, size: 18, align: "center", color: DefaultColor })};
  width: 325px;
  height: 57px;
  background-color: #ffffff;
  border: 3px solid ${DefaultColor};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
  &:hover {
    background-color: ${DefaultColor};
    color: #ffffff;
    cursor: pointer;
  }
`;

const SubButtonContainer = styled.div`
  ${Mixin({ weight: 800, size: 18, align: "center", color: "#000000" })};
`;

export { MyContainer, SubButtonContainer, LinkContainer };
