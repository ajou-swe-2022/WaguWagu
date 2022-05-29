import styled from "styled-components";
import Select from "react-select";
import { DefaultColor } from "@Style/";

const FullFrame = styled.div`
  display: grid;
  place-items: center;
  min-height: 100vh;
`;

const EnrollContainer = styled.div`
  width: 838px;
  height: 722px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid #c0c0c0;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const VectorContainer = styled.img`
  width: 46px;
  height: 46px;
  position: absolute;
  top: 27px;
  left: 35px;
  &:hover {
    cursor: pointer;
  }
`;

const TitleContainer = styled.h1`
  display: block;
  top: 30px;
  margin: 24px;
  font-weight: 700;
  font-size: 40px;
  text-align: center;
  color: #000000;
`;

const ProcedureContainer = styled.div`
  position: relative;
  margin: 12px;
`;

const ProcedureVector = styled.img`
  width: 617px;
  height: 56px;
`;

const ProcedureText = styled.div`
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
`;

const InputContainer = styled.div`
  margin: ${(props) => props.margin}px;
`;

const InputTitleContainer = styled.div`
  margin: ${(props) => props.margin}px 0px;
  font-weight: 800;
  font-size: 25px;
  text-align: left;
  color: #404347;
`;

const InputSelectContainer = styled(Select)`
  padding: 2px;
  width: 480px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #d0d2e0;
  border-radius: 5px;
  & div {
    border: none;
    outline-width: 0px;
    & #react-select-3-placeholder {
      color: #d0d2e0;
      font-size: 20px;
      font-weight: 600;
    }
    & div {
      font-size: 20px;
      font-weight: 600;
    }
    &:hover {
      cursor: pointer;
    }
  }
  &:hover {
    cursor: pointer;
  }
`;

const InputAddressButton = styled.button`
  width: 480px;
  height: 50px;
  padding-left: 13px;
  border: 1px solid #d0d2e0;
  border-radius: 5px;
  background-color: #ffffff;
  color: #d0d2e0;
  text-align: start;
  font-weight: 600;
  font-size: 20px;
  transition: 0.2s;
  &:hover {
    background-color: ${DefaultColor};
    color: #ffffff;
    cursor: pointer;
    opacity: 0.5;
  }
`;

const InputTextContainer = styled.input`
  margin: ${(props) => props.margin}px 0px;
  padding: 2px;
  width: 480px;
  height: 50px;
  background: transparent;
  border: 1px solid
    ${(props) => {
      if (props.phase === 1.5) return "red";
      else if (props.phase === 1.7) return "green";
      else return "#D0D2E0";
    }};
  border-radius: 5px;
  font-size: 20px;
  color: #000000;
  ::placeholder {
    color: #d0d2e0;
    font-weight: 600;
    font-size: 20px;
  }
  &:focus {
    outline: none;
    box-shadow: 0px 0px 5px ${DefaultColor};
    ::placeholder {
      opacity: 0;
    }
  }
`;

const DupCheckButton = styled.button`
  width: 80px;
  height: 25px;
  margin-left: 10px;
  background: transparent;
  border: 1px solid #f6d6ac;
  border-radius: 10px;
  color: #f6d6ac;
  transition: 0.2s;
  &:hover {
    background-color: #f6d6ac;
    cursor: pointer;
    color: #ffffff;
  }
`;

const SubmitButton = styled.button`
  width: 162px;
  height: 45px;
  background-color: #ffffff;
  border: 1px solid #d0d2e0;
  border-radius: 10px;
  font-weight: 700;
  font-size: 25px;
  text-align: center;
  color: #0000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: 0.2s;
  &:hover {
    cursor: pointer;
    background-color: #f6d6ac;
    color: #ffffff;
  }
`;

export {
  FullFrame,
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
  SubmitButton,
  DupCheckButton,
};
