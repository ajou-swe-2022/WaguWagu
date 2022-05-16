import styled from "styled-components";

// page1 page2 page3 page4 마다 보여주는게 다르다
// props : backgroundImg, downloadBlockPosX, download
const Container = styled.div`
  top: 0px;
  height: 100vh;
  position: relative;
  background-image: url(${(props) => props.backgroundURL});
  background-size: cover;
`;

const DownloadContainer = styled.div`
  position: fixed;
  z-index: 1;
  top: 30px;
  right: 50px;
`;

const LogoContainer = styled.div`
  position: fixed;
  z-index: 1;
  bottom: 24px;
  left: 24px;
`;

const TextContainer = styled.div`
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
`;

const ToHomeContainer = styled.div`
  position: absolute;
  bottom: 46px;
  left: 160px;
`;

export {
  Container,
  DownloadContainer,
  LogoContainer,
  TextContainer,
  ToHomeContainer,
};
