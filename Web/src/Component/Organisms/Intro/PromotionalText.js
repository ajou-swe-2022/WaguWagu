import { IntroBannerColor, IntroBannerSize, IntroBannerWeight } from "@Style";
import { PromotionalTextContainer } from "./styles";

const PromotionalText = ({ promotion }) => {
  return (
    <PromotionalTextContainer
      color={IntroBannerColor}
      size={IntroBannerSize}
      weight={IntroBannerWeight}
    >
      {promotion}
    </PromotionalTextContainer>
  );
};

export default PromotionalText;
