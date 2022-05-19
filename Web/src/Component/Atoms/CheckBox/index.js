import {
  CheckboxContainer,
  Icon,
  HiddenCheckbox,
  StyledCheckbox,
} from "./styles";

const CheckBox = ({ checked, ...props }) => {
  return (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="19 7 10 17 5 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );
};

export default CheckBox;
