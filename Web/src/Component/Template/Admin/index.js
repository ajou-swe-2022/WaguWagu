import { MainContainer, MenuContainer, MenuItemContainer } from "./styles";
import Footer from "@Organisms/Footer";
import Header from "@Organisms/Header";
import { MenuItem, Title, Index } from "@Organisms/Admin";
import {
  MainTitle,
  AccountManagementTitle,
  StoreManagementTitle,
  AccountManagement,
  StoreManagement,
} from "./constant";

import { removeCookie, USER_KEY } from "@Util/cookie";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

// mainTitle, subTitle, linkTo

const renderMenu = (items) => {
  return items.map((el) => {
    return (
      <MenuItem
        mainTitle={el["title"]}
        subTitle={el["subtitle"]}
        linkTo={el["linkTo"]}
      ></MenuItem>
    );
  });
};

const AdminTemplate = () => {

  const navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useState(true);

  const handleLoginout = (menuName, linkTo) => {
    navigate(linkTo);
    if (menuName === "로그아웃") {
      setLoginStatus(false);
      removeCookie(USER_KEY);
    }
  };

  return (
    <>
      <Header loginStatus={loginStatus} onClick={handleLoginout} />
      <MainContainer>
        <Title text={MainTitle} />
        <MenuContainer>
          <Index text={AccountManagementTitle}></Index>
          <MenuItemContainer>{renderMenu(AccountManagement)}</MenuItemContainer>
        </MenuContainer>
        <MenuContainer>
          <Index text={StoreManagementTitle}></Index>
          <MenuItemContainer>{renderMenu(StoreManagement)}</MenuItemContainer>
        </MenuContainer>
      </MainContainer>
      <Footer></Footer>
    </>
  );
};

export default AdminTemplate;
