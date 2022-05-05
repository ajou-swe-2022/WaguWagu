import DownloadButtonGroup from "@Molecules/Intro/DownloadButtonGroup";
import { DownloadContainer } from "./styles";

const Download = ({ forAppStore, forPlayStore }) => {
  return (
    <DownloadContainer>
      <DownloadButtonGroup
        forAppStore={forAppStore}
        forPlayStore={forPlayStore}
      />
    </DownloadContainer>
  );
};

export default Download;
