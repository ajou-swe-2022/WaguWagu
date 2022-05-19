import {
  MainContainer,
  ArticleSection,
  ArticleContainerTitle,
  ArticleContainer,
  MySection,
  MyContainer,
} from "./styles";
import Header from "@Organisms/Header/";
import Footer from "@Organisms/Footer/";
import { Article, Entrance } from "@Organisms/Main";

const renderArticles = (num) => {
  let articles = [];
  for (let i = 0; i < num; ++i) {
    articles.push(<Article />);
  }
  return articles;
};

const MainTemplate = (props) => {
  return (
    <>
      <Header loginStatus={props.loginStatus} />
      <MainContainer>
        <ArticleSection>
          <ArticleContainerTitle>{"소식통"}</ArticleContainerTitle>
          <ArticleContainer>{renderArticles(4)}</ArticleContainer>
        </ArticleSection>
        <MySection>
          <MyContainer>
            <Entrance {...props} />
          </MyContainer>
        </MySection>
      </MainContainer>
      <Footer />
    </>
  );
};

export default MainTemplate;
