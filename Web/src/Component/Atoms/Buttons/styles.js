import styled from "styled-components";
import { DefaultColor } from "@Style/";

const BasicButton = styled.button`
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

export { BasicButton };
