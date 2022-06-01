import {
  RequestContainer,
  Btn,
  BtnContainer,
  BtnOperator,
  BtnDisplay,
} from "./styles";

const RequestPending = () => {
  return (
    <RequestContainer>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: "30px",
          fontWeight: "700",
          margin: "25px 0px",
        }}
      >
        <h2
          style={{
            display: "flex",
            marginLeft: "20px",
            marginRight: "240px",
          }}
        >
          {"테이블 2"}
          <span style={{ marginLeft: "15px" }}>{"요청"}</span>
        </h2>
        <Btn style={{ width: "80px", margin: "0px 16px" }}>수락</Btn>
        <Btn style={{ width: "80px" }}>거절</Btn>
      </div>

      <div style={{ display: "flex" }}>
        <h2
          style={{
            margin: "40px 0px 0px 20px",
            fontWeight: "700",
          }}
        >
          방문 제한 시간 설정
        </h2>
        <BtnContainer style={{ marginLeft: "70px" }}>
          <BtnOperator
            style={{
              borderRight: "3px solid #FDB165",
              marginRight: "50px",
            }}
          >
            -10
          </BtnOperator>
          <BtnDisplay>12:30</BtnDisplay>
          <BtnOperator
            style={{ borderLeft: "3px solid #FDB165", marginLeft: "50px" }}
          >
            +10
          </BtnOperator>
        </BtnContainer>
      </div>
    </RequestContainer>
  );
};

export default RequestPending;
