import { css } from "styled-components";
import styled from "styled-components";
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

const GMContainer = styled.button`
  ${Mixin({ weight: 800, size: 18, align: "center", color: "#000000" })};
  list-style-type: none;
  margin-right: 15px;
  background-color: transparent;
  border: 0px;
  &::after {
    width: 1px;
    height: 16px;
    background-color: ${DefaultColor};
    content: "";
    position: absolute;
    margin: auto;
    margin-left: 15px;
    top: 0;
    bottom: 0;
  }
  &:last-child:after {
    display: none;
  }
`;

const GNBContainer = styled.div`
  ${Mixin({ weight: 800, size: 40, align: "center", color: "#000000" })};
  margin: 0px 33px;
  @media screen and (max-width: 1330px) {
    margin: 0px 18px;
  }
  @media screen and (max-width: 1210px) {
    display: none;
  }
`;


export { GMContainer, GNBContainer };
