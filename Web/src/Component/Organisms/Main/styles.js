import styled from "styled-components";

const SubItemContainer = styled.li`
  margin: 7px 7px 7px 14px;
  position: relative;
`;

const SubContainer = styled.ul`
  display: flex;
`;

const MyContainer = styled.div`
  margin: 7px;
`;

const InstructionContainer = styled.p`
  display: block;
  margin: 7px;
  font-weight: 800;
  font-size: 28px;
  text-align: end;
  color: #000000;
`;

const EntranceContainer = styled.div`
  position: relative;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
`;

const DummyArticle = styled.div`
  width: 978px;
  height: 328px;
  margin: 25px 0px;
  position: relative;
  background-color: #c4c4c4;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  font-weight: 800;
  font-size: 30px;
  text-align: center;
  color: #ffffff;
  transition: 0.2s;
  &:hover {
    cursor: pointer;
    color: #000000;
    opacity: 0.5;
  }
`;

export {
  MyContainer,
  SubItemContainer,
  InstructionContainer,
  EntranceContainer,
  SubContainer,
  DummyArticle,
};
