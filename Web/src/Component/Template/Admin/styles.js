import styled from "styled-components";

const MainContainer = styled.main`
  height: 1200px;
  padding: 125px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const MenuItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export { MainContainer, MenuContainer, MenuItemContainer };
