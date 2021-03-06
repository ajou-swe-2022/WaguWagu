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

import { removeCookie, USER_KEY, USER_NAME } from "@Util/cookie";

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
    if (menuName === "๋ก๊ทธ์์") {
      setLoginStatus(false);
      removeCookie(USER_KEY);
      removeCookie(USER_NAME);
    }
    navigate(linkTo);
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
