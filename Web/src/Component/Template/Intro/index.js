import Logo from "@Atoms/Logo";
import {
  IntroBanner,
  IntroAppStoreDownloadText,
  IntroPlayStoreDownloadText,
  IntroToHomeText,
} from "@Constant";
import { Download, PromotionalText, Swap, ToHome } from "@Organisms/Intro";
import {
  Container,
  DownloadContainer,
  SwapperContainer,
  LogoContainer,
  TextContainer,
  ToHomeContainer,
} from "./styles";

const IntroTemplate = ({ backgroundURL, turn, logoURL }) => {
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
    <Container backgroundURL={backgroundURL} turn={turn}>
      <DownloadContainer>
        <Download
          forAppStore={IntroAppStoreDownloadText}
          forPlayStore={IntroPlayStoreDownloadText}
        />
      </DownloadContainer>
      <SwapperContainer>
        <Swap turn={turn} />
      </SwapperContainer>
      <LogoContainer>
        <Logo location={logoURL} />
      </LogoContainer>
      {RenderTexts(turn)}
      {turn === 4 ? RenderToHome() : null}
    </Container>
  );
};

export default IntroTemplate;
