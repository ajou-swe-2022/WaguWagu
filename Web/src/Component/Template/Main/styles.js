import styled from "styled-components";

const InnerLRGAP = 24;
const InnerTopGAP = 126;

const MainContainer = styled.main`
  position: relative;
  height: 2000px;
`;

const ArticleSection = styled.section``;

const ArticleContainerTitle = styled.p`
  position: absolute;
  left: ${InnerLRGAP}px;
  top: 55px;
  display: block;
  font-weight: 800;
  font-size: 30px;
  color: #000000;
`;

const ArticleContainer = styled.div`
  position: absolute;
  top: ${InnerTopGAP}px;
  left: ${InnerLRGAP}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MySection = styled.section`
  @media screen and (max-width: 1390px) {
    display: none;
  }
`;

const MyContainer = styled.div`
  position: absolute;
  top: ${InnerTopGAP}px;
  right: ${InnerLRGAP}px;
`;

export {
  MainContainer,
  ArticleSection,
  ArticleContainerTitle,
  ArticleContainer,
  MySection,
  MyContainer,
};
