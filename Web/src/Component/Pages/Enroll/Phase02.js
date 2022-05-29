import {
  EnrollContainer,
  VectorContainer,
  TitleContainer,
  ProcedureContainer,
  ProcedureVector,
  ProcedureText,
  InputContainer,
  InputTitleContainer,
  InputSelectContainer,
  InputAddressButton,
  InputTextContainer,
  DupCheckButton,
  SubmitButton,
} from "./styles";

import { LEFT_ARROW_VECTOR, PROCEDURE_VECTOR } from "@Common/";
import { CATEGORIES } from "@Common/";

import { useState } from "react";

const Phase01 = (props) => {
  const [isModal, setModal] = useState(false);

  return (
    <EnrollContainer>
      <VectorContainer src={LEFT_ARROW_VECTOR}></VectorContainer>
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
        <InputTitleContainer margin={6}>{"가게 업종"}</InputTitleContainer>
        <InputSelectContainer
          id={"category"}
          placeholder={"  업종을 선택해주세요"}
          options={CATEGORIES}
          value={CATEGORIES.filter((obj) => obj.value === props.category)}
          onChange={(e) => props.setCategory(e.value)}
        />
      </InputContainer>

      <InputContainer margin={20}>
        <InputTitleContainer margin={6}>{"가게 지역"}</InputTitleContainer>
        <InputAddressButton>{"주소를 입력해주세요!"}</InputAddressButton>
      </InputContainer>

      <InputContainer margin={20}>
        <InputTitleContainer margin={6}>{"사업자 번호"}</InputTitleContainer>
        <InputTextContainer
          placeholder="  사업자 번호를 적어주세요"
          id="id"
          onChange={props.onChange}
        ></InputTextContainer>
      </InputContainer>

      <SubmitButton style={{ marginTop: "25px" }} onClick={props.onClick}>
        {"제출"}
      </SubmitButton>
    </EnrollContainer>
  );
};

export default Phase01;
