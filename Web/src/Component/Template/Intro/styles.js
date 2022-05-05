import styled from "styled-components";

// page1 page2 page3 page4 마다 보여주는게 다르다
// props : backgroundImg, downloadBlockPosX, download
const Container = styled.div`
  height: 100vh;
  position: relative;
  background-image: url(${(props) => props.backgroundURL});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const DownloadContainer = styled.div`
  position: fixed;
  top: 30px;
  right: 80px;
`;

const SwapperContainer = styled.div`
  position: absolute;
  top: 300px;
  right: 30px;
`;

const LogoContainer = styled.div`
  position: fixed;
  bottom: 24px;
  left: 24px;
`;

const TextContainer = styled.div`
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
`;

const ToHomeContainer = styled.div`
  position: fixed;
  bottom: 30px;
  left: 160px;
`;

export {
  Container,
  DownloadContainer,
  SwapperContainer,
  LogoContainer,
  TextContainer,
  ToHomeContainer,
};
