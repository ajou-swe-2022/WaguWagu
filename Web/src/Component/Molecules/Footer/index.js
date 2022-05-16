import {
  TextContainer,
  PContainer,
  InfoContainer,
  CallContainer,
} from "./style";
import { FooterInner } from "@Constant/Footer";

const FooterContents = () => {
  return (
    <TextContainer>
      <InfoContainer>
        <PContainer>{FooterInner["CompanyInfo"]["inc"]}</PContainer>
        <PContainer>{FooterInner["CompanyInfo"]["location"]}</PContainer>
      </InfoContainer>
      <CallContainer>
        <PContainer>{FooterInner["ContactInfo"]["TEL_TEXT"]}</PContainer>
        <PContainer>{FooterInner["ContactInfo"]["TEL_CALL"]}</PContainer>
        <PContainer>{FooterInner["ContactInfo"]["TEL_FAX"]}</PContainer>
      </CallContainer>
    </TextContainer>
  );
};

export default FooterContents;
