import {
  EnrollContainer,
  VectorContainer,
  TitleContainer,
  ProcedureContainer,
  ProcedureVector,
  ProcedureText,
  InputContainer,
  InputTitleContainer,
  InputTextContainer,
  InputTextAreaContainer,
  SubmitButton,
} from "./styles";

import { LEFT_ARROW_VECTOR, PROCEDURE_VECTOR } from "@Common/";
import { CATEGORIES } from "@Common/";

const Phase03 = (props) => {
  return (
    <EnrollContainer>
      {" "}
      <VectorContainer
        src={LEFT_ARROW_VECTOR}
        onClick={props.popBack}
      ></VectorContainer>
      <TitleContainer>{"와구와구 사장님 회원가입"}</TitleContainer>
      <ProcedureContainer>
        <ProcedureVector src={PROCEDURE_VECTOR} />
        <ProcedureText top={23} left={25}>
          {"개인정보 입력"}
        </ProcedureText>
        <ProcedureText top={23} left={275}>
          {"매장정보 입력"}
        </ProcedureText>
        <ProcedureText top={23} left={500}>
          {"회원가입 종료"}
        </ProcedureText>
      </ProcedureContainer>
      <InputContainer margin={20}>
        <InputTitleContainer margin={6}>{"가게 이름"}</InputTitleContainer>
        <InputTextContainer
          placeholder="  사장님의 소중한 가게명을 적어주세요!"
          id="name"
          onChange={props.onChange}
        ></InputTextContainer>
      </InputContainer>
      <InputContainer margin={20}>
        <InputTitleContainer margin={6}>{"사업자 번호"}</InputTitleContainer>
        <InputTextAreaContainer
          placeholder="    사장님의 소중한 가게에 대한 설명을 적어주세요!"
          id="description"
          onChange={props.onChange}
        ></InputTextAreaContainer>
      </InputContainer>
      <SubmitButton style={{ marginTop: "25px" }} onClick={props.onClick}>
        {"완료"}
      </SubmitButton>
    </EnrollContainer>
  );
};

export default Phase03;
