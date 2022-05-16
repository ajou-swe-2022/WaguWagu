import React from "react";
import { ToHomeBtnContainer } from "./styles";

const ToHomeButton = ({ purpose }) => {
  return <ToHomeBtnContainer to="/main">{purpose}</ToHomeBtnContainer>;
};

export default ToHomeButton;
