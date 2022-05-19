import styled from "styled-components";

const FormContainer = styled.div`
  width: 500px;
  height: 200px;
  margin: 20px;
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const SubContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  jusitfy-content: space-between;
  align-items: center;
`;

const CheckContainer = styled.label`
  position: absolute;
  display: block;
  left: 0px;
`;

const SubmenuContainer = styled.div`
  position: absolute;
  right: 0px;
`;

export { FormContainer, SubContainer, CheckContainer, SubmenuContainer };
