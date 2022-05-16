import { DownloadBtnContainer, IconContainer } from "./styles";

const DownloadButton = ({ purpose, logo }) => {
  return (
    <DownloadBtnContainer>
      <IconContainer src={logo} /> {purpose}{" "}
    </DownloadBtnContainer>
  );
};

export default DownloadButton;
