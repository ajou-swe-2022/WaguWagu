import { DownloadButton } from "@Atoms/Buttons";
import { DownloadContainer } from "./styles";

const DownloadButtonGroup = ({ forAppStore, forPlayStore }) => {
  return (
    <DownloadContainer>
      <DownloadButton purpose={forAppStore} />
      <DownloadButton purpose={forPlayStore} />
    </DownloadContainer>
  );
};

export default DownloadButtonGroup;
