import React from "react";
import Container from "./style";
import { LOGO_IMG_URL } from "@Constant/Common";

const Logo = ({ location }) => {
  return <Container src={LOGO_IMG_URL}></Container>;
};

export default Logo;
