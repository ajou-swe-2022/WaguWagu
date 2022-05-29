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
  InputTextContainer,
  SubmitButton,
} from "./styles";

import { LEFT_ARROW_VECTOR, PROCEDURE_VECTOR } from "@Common/";
import { CATEGORIES } from "@Common/";

import DaumPostcode from "react-daum-postcode";
import { useState } from "react";

const Phase01 = (props) => {
  const [visible, setVisible] = useState(false);

  const onComplete = (data) => {
    setVisible(true);
    props.setAddress(data.roadAddress);
  };

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
        <div>
          <DaumPostcode
            style={{
              border: "1px solid #d0d2e0",
              borderRadius: "5px",
              padding: "20px",
              marginRight: "140px",
            }}
            onComplete={onComplete}
          />
          <InputTextContainer
            style={{
              display: visible ? "block" : "none",
              marginTop: "6px",
              fontWeight: "600",
              fontSize: "20px",
            }}
            disabled={true}
            value={`  ${props.address}`}
          ></InputTextContainer>
          <InputTextContainer
            style={{ display: visible ? "block" : "none", marginTop: "6px" }}
            placeholder={"  상세주소를 적어주세요"}
            onChange={(e) => {
              props.setAddressDetail(e.target.value);
            }}
          ></InputTextContainer>
        </div>
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
