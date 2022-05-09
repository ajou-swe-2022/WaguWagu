import Logo from "@Atoms/Logo";
import {
  LOGO_IMG_URL,
  IntroBanner,
  IntroAppStoreDownloadText,
  IntroPlayStoreDownloadText,
  IntroToHomeText,
  APPSTORE_LOGO,
  PLAYSTORE_LOGO,
} from "@Constant";
import { Download, PromotionalText, ToHome, Swap } from "@Organisms/Intro";
import {
  Container,
  DownloadContainer,
  LogoContainer,
  SwapContainer,
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
          <Logo location={LOGO_IMG_URL} />
        </LogoContainer>
        {RenderTexts(turn)}
        {turn === 4 ? RenderToHome() : null}
      </Container>
    </>
  );
};

export default IntroTemplate;
