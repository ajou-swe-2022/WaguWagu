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

import { USER_KEY, USER_NAME, removeCookie, getCookie } from "@Util/cookie";
import { scrollTop } from "@Util/scrollTop";

import { loginMessage, greetingsMessage } from "./constant";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const renderArticles = (num) => {
  let articles = [];
  for (let i = 0; i < num; ++i) {
    articles.push(<Article />);
  }
  return articles;
};

const MainTemplate = (props) => {
  const navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useState(false);

  const handleLoginout = (menuName, linkTo) => {
    navigate(linkTo);
    if (menuName === "로그아웃") {
      setLoginStatus(false);
      removeCookie(USER_KEY);
      removeCookie(USER_NAME);
    }
  };

  useEffect(() => {
    const status = getCookie(USER_KEY);
    scrollTop();
    if (status) {
      setLoginStatus(true);
    } else {
      setLoginStatus(false);
    }
  }, []);

  return (
    <>
      <Header loginStatus={loginStatus} onClick={handleLoginout} />
      <MainContainer>
        <ArticleSection>
          <ArticleContainerTitle>{"소식통"}</ArticleContainerTitle>
          <ArticleContainer>{renderArticles(4)}</ArticleContainer>
        </ArticleSection>
        <MySection>
          <MyContainer>
            <Entrance
              loginStatus={loginStatus}
              onClick={handleLoginout}
              loginMessage={loginMessage}
              greetingsMessage={greetingsMessage}
            />
          </MyContainer>
        </MySection>
      </MainContainer>
      <Footer />
    </>
  );
};

export default MainTemplate;
