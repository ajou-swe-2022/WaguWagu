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
  DupCheckButton,
  SubmitButton,
} from "./styles";

import { LEFT_ARROW_VECTOR, PROCEDURE_VECTOR } from "@Common/";

const Phase01 = (props) => {
  return (
    <EnrollContainer>
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
      <InputContainer margin={15}>
        <InputTitleContainer margin={6}>{"이름"}</InputTitleContainer>
        <InputTextContainer
          placeholder="  이름을 적어주세요"
          id="userName"
          onChange={props.onChange}
        ></InputTextContainer>
      </InputContainer>
      <InputContainer margin={15}>
        <InputTitleContainer margin={5}>{"전화번호"}</InputTitleContainer>
        <InputTextContainer
          placeholder="  - 를 빼고 적어주세요"
          id="tell"
          onChange={props.onChange}
        ></InputTextContainer>
      </InputContainer>
      <InputContainer margin={15}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <InputTitleContainer margin={5}>{"아이디"}</InputTitleContainer>
          <DupCheckButton onClick={props.idCheck}>{"중복확인"}</DupCheckButton>
        </div>
        <InputTextContainer
          placeholder=" 이메일 형식으로 적어주세요"
          id="email"
          onChange={props.onChange}
          phase={props.phase}
        ></InputTextContainer>
      </InputContainer>
      <InputContainer margin={15}>
        <InputTitleContainer margin={5}>{"비밀번호"}</InputTitleContainer>
        <InputTextContainer
          placeholder="  영어, 숫자, 특수문자 중 2가지 이상 10자 ~ 20자"
          id="pw"
          onChange={props.onChange}
        ></InputTextContainer>
      </InputContainer>
      <SubmitButton style={{ marginTop: "15px" }} onClick={props.onClick}>
        {"다음 단계로"}
      </SubmitButton>
    </EnrollContainer>
  );
};

export default Phase01;
