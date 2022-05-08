import { DownloadButton } from "@Atoms/Buttons";
import { DownloadContainer } from "./styles";

const DownloadButtonGroup = ({
  forAppStore,
  forPlayStore,
  AppLogo,
  PlayLogo,
}) => {
  return (
    <DownloadContainer>
      <DownloadButton purpose={forAppStore} logo={AppLogo} />
      <DownloadButton purpose={forPlayStore} logo={PlayLogo} />
    </DownloadContainer>
  );
};

export default DownloadButtonGroup;
