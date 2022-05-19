import styled from "styled-components";
import { DefaultColor } from "@Style";

const Container = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  placeholder: ${(props) => props.placeholder};
  border: ${(props) => props.borderWidth} ${(props) => props.borderStyle}
    ${(props) => props.borderColor};
  border-radius: ${(props) => props.borderRadius};
  font-size: ${(props) => props.placeholderSize};
  ::placeholder {
    color: ${(props) => props.placeholderColor};
    font-weight: ${(props) => props.placeholderWeight};
    font-size: ${(props) => props.placeholderSize};
  }
  &:focus {
    outline: none;
    box-shadow: 0px 0px 5px ${DefaultColor};
    ::placeholder {
      opacity: 0;
    }
  }
`;

export { Container };
