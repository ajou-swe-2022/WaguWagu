import {
  MenuContainer,
  MenuInnerContainer,
  MenuNameContainer,
  MenuInfoContainer,
  MenuIconContainer,
  TitleContainer,
  SubTitleContainer,
} from "./styles";

import { RIGHT_ARROW_VECTOR } from "@Common/";

const MenuItem = ({ mainTitle, subTitle, linkTo }) => {
  return (
    <MenuContainer to={linkTo}>
      <MenuInnerContainer>
        <MenuNameContainer>{mainTitle}</MenuNameContainer>
        <MenuInfoContainer>{subTitle}</MenuInfoContainer>
      </MenuInnerContainer>
      <MenuIconContainer src={RIGHT_ARROW_VECTOR} />
    </MenuContainer>
  );
};

const Title = ({ text }) => {
  return <TitleContainer>{text}</TitleContainer>;
};

const Index = ({ text }) => {
  return <SubTitleContainer>{text}</SubTitleContainer>;
};

export { MenuItem, Title, Index };
