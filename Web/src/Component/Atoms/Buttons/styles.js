import styled from "styled-components";
import { css } from "styled-components";
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

const BasicButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border: ${(props) => props.borderWidth} ${(props) => props.borderStyle}
    ${(props) => props.borderColor};
  border-radius: ${(props) => props.borderRadius};
  box-shadow: ${(props) => props.shadow} ${(props) => props.shadowColor};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  transition: ${(props) => props.transitionTime};
  &:hover {
    cursor: pointer;
    background-color: ${DefaultColor};
    color: ${(props) => props.backgroundColor};
  }
`;

const SubButtonContainer = styled(Link)`
  display: block;
  ${Mixin({ weight: 800, size: 18, align: "center", color: "#000000" })};
`;

export { BasicButton, SubButtonContainer };
