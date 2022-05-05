import ToHomeButton from "@Atoms/Buttons/ToHomeButton";
import { ToHomeContainer } from "./styles";

const ToHome = ({ purpose }) => {
  return (
    <ToHomeContainer>
      <ToHomeButton purpose={purpose} />
    </ToHomeContainer>
  );
};

export default ToHome;
