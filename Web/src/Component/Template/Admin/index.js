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
  return (
    <>
      <Header loginStatus={true}></Header>
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
