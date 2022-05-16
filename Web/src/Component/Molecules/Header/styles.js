import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkContainer = styled(Link)``;

const TitleContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 24px;
  width: 371px;
  height: 121px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleTextContainer = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 60px;
  text-align: center;
  color: #000000;
`;

const GNBContainer = styled.div`
  position: absolute;
  top: 100px;
  right: 45px;
  display: flex;
`;

const GMContainer = styled.ul`
  position: absolute;
  top: 22px;
  right: 38px;
  display: flex;
`;

export {
  LinkContainer,
  TitleContainer,
  TitleTextContainer,
  GNBContainer,
  GMContainer,
};
