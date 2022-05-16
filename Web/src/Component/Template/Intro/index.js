import Logo from "@Atoms/Logo";
import { APPSTORE_LOGO, PLAYSTORE_LOGO } from "@Constant/Common";
import {
  IntroBanner,
  IntroAppStoreDownloadText,
  IntroPlayStoreDownloadText,
  IntroToHomeText,
} from "@Constant/Intro";
import { Download, PromotionalText, ToHome } from "@Organisms/Intro";
import {
  Container,
  DownloadContainer,
  LogoContainer,
  TextContainer,
  ToHomeContainer,
} from "./styles";

const IntroTemplate = ({ turn }) => {
  const RenderTexts = (turn) => {
    return IntroBanner[turn].text.map((el) => {
      return (
        <TextContainer top={el.top} left={el.left}>
          <PromotionalText promotion={el.text} />
        </TextContainer>
      );
    });
  };

  const RenderToHome = () => {
    return (
      <ToHomeContainer>
        <ToHome purpose={IntroToHomeText} />
      </ToHomeContainer>
    );
  };

  return (
    <>
      <Container backgroundURL={IntroBanner[turn].background} turn={turn}>
        <DownloadContainer>
          <Download
            forAppStore={IntroAppStoreDownloadText}
            forPlayStore={IntroPlayStoreDownloadText}
            AppLogo={APPSTORE_LOGO}
            PlayLogo={PLAYSTORE_LOGO}
          />
        </DownloadContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        {turn === 4 ? RenderToHome() : null}
        {RenderTexts(turn)}
      </Container>
    </>
  );
};

export default IntroTemplate;
