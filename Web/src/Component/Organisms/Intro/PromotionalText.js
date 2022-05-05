import { PromotionalTextContainer } from "./styles";

const IntroBannerFontColor = "#ffffff";
const IntroBannerFontSize = 60;
const IntroBannerFontWeight = 700;

const PromotionalText = ({ promotion }) => {
  return (
    <PromotionalTextContainer
      color={IntroBannerFontColor}
      size={IntroBannerFontSize}
      weight={IntroBannerFontWeight}
    >
      {promotion}
    </PromotionalTextContainer>
  );
};

export default PromotionalText;
