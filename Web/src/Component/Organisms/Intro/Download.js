import DownloadButtonGroup from "@Molecules/Intro/DownloadButtonGroup";
import { DownloadContainer } from "./styles";

const Download = ({ forAppStore, forPlayStore, AppLogo, PlayLogo }) => {
  return (
    <DownloadContainer>
      <DownloadButtonGroup
        forAppStore={forAppStore}
        forPlayStore={forPlayStore}
        AppLogo={AppLogo}
        PlayLogo={PlayLogo}
      />
    </DownloadContainer>
  );
};

export default Download;
