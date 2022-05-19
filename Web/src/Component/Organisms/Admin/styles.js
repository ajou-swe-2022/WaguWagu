import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuContainer = styled(Link)`
  width: 726px;
  height: 121px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #fdb165;
  &:last-child {
    border: none;
  }
`;

const MenuInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const MenuNameContainer = styled.h2`
  margin: 5px;
  display: block;
  font-weight: 800;
  font-size: 24px;
  color: #000000;
`;

const MenuInfoContainer = styled.p`
  margin: 5px;
  display: block;
  font-weight: 500;
  font-size: 20px;
  color: #d0d2e0;
`;

const MenuIconContainer = styled.img`
  display: block;
  width: 18px;
  height: 24px;
`;

const TitleContainer = styled.h1`
  display: block;
  font-weight: 800;
  font-size: 60px;
  color: #000000;
`;

const SubTitleContainer = styled.h3`
  margin: 0px 0px 15px 5px;
  display: block;
  font-weight: 800;
  font-size: 18px;
  color: #000000;
`;

export {
  MenuContainer,
  MenuInnerContainer,
  MenuNameContainer,
  MenuInfoContainer,
  MenuIconContainer,
  TitleContainer,
  SubTitleContainer,
};
