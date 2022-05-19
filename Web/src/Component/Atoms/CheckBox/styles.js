import styled from "styled-components";
import { DefaultColor } from "@Style/";

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: ${DefaultColor};
  stroke-width: 3px;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  overflow: hidden;
  padding: 0;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 5px solid "#D0D2E0";
  border-radius: 3px;
  box-shadow: 0px 2px 2px #d0d2e0;
  transform: 0.2s;
  ${HiddenCheckbox}:hover + & {
    box-shadow: 1px 2px 2px ${DefaultColor};
    opacity: 0.7;
  }
  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

export { CheckboxContainer, Icon, HiddenCheckbox, StyledCheckbox };
