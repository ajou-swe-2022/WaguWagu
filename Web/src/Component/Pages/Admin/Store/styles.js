import styled, { css } from "styled-components";
import { DefaultColor } from "@Common/Style";

// Button Styling
const sharedBtn = css`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 800;
  font-size: 25px;
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #d0d2e0;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px #00000040;
  transition: 0.2s;
  &:hover {
    color: #ffffff;
    border-color: ${DefaultColor};
    background-color: ${DefaultColor};
    cursor: pointer;
  }
`;

const Btn = styled.button`
  width: 124px;
  height: 45px;
  ${sharedBtn}
`;

// Common
const StoreContainer = styled.div`
  margin: 100px 30px;
`;

const FlexContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EditContainer = styled.div`
  margin: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const EditVector = styled.img`
  margin: 5px;
  width: 40px;
  height: 40px;
  margin-right: 5px;
`;

const EditText = styled.div`
  margin: 5px 0px 5px 5px;
  font-size: 25px;
  font-weight: 800;
  text-align: center;
  color: ${DefaultColor};
`;

// Title
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SubTitleText = styled.h3`
  font-size: 20px;
  font-weight: 800;
  margin: 100px 0px 8px 100px;
`;

const TitleText = styled.h1`
  font-size: 60px;
  font-weight: 800;
  margin: 20px 0px 8px 100px;
`;

// Store Data (IMG)
const IMGContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const IMGLabel = styled.label`
  width: 124px;
  height: 45px;
  margin-top: 20px;
  ${sharedBtn};
`;

const IMGPreview = styled.img`
  width: 465px;
  height: 465px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 40px;
  color: #ffffff;
  border-radius: 50%;
`;

const IMGBox = styled.input`
  display: none;
`;

// Store Data (Description)
const DescriptionTitle = styled.h2`
  font-size: 25px;
  font-weight: 800;
  color: ${DefaultColor};
`;

const DescriptionText = styled.input`
  width: 475px;
  height: 56px;
  font-size: 24px;
  font-weight: 800;
  text-align: center;
  border: none;
  border-top: 2px solid #fdb165;
  border-bottom: 2px solid #fdb165;
`;

const DescriptionTextArea = styled.textarea`
  width: 475px;
  height: 158px;
  font-size: 24px;
  font-weight: 800;
  text-align: center;
  border: none;
  border-top: 2px solid #fdb165;
  border-bottom: 2px solid #fdb165;
`;

const TimeControl = styled.div`
  width: 475px;
  height: 73px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-top: 2px solid #fdb165;
  border-bottom: 2px solid #fdb165;
`;

const InnerButton = styled.button`
  width: 120px;
  height: 40px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000;
  font-weight: 700;
  font-size: 40px;
  border: none;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;

const InnerText = styled.div`
  width: 209px;
  height: 59px;
  padding-top: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000;
  font-weight: 700;
  font-size: 40px;
  border: none;
  border-left: 2px solid #fdb165;
  border-right: 2px solid #fdb165;
`;

// MenuAdd
const MenuContainer = styled.div`
  width: 610px;
  height: 172px;
  display: flex;
  align-items: center;
  border-top: 2px solid #fdb165;
  border-bottom: 2px solid #fdb165;
`;

const MenuImg = styled.img`
  width: 180px;
  height: 150px;
  margin-right: 20px;
`;

const MenuDataContainer = styled.div``;

const MenuData = styled.input`
  width: 202px;
  height: 48px;
  margin: 4px;
  border: 1px solid #d0d2e0;
  border-radius: 5px;
  color: #000000;
  font-weight: 800;
  font-size: 24px;
`;

const MenuBtns = styled.div``;

export {
  Btn,
  StoreContainer,
  FlexContainer,
  LeftContainer,
  RightContainer,
  EditContainer,
  EditVector,
  EditText,
  TitleContainer,
  SubTitleText,
  TitleText,
  IMGContainer,
  IMGLabel,
  IMGPreview,
  IMGBox,
  DescriptionTitle,
  DescriptionText,
  DescriptionTextArea,
  TimeControl,
  InnerButton,
  InnerText,
  MenuContainer,
  MenuImg,
  MenuDataContainer,
  MenuData,
  MenuBtns,
};
