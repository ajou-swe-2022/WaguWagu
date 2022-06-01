import { Btn, RequestContainer } from "./styles";

const RequestComplete = (props) => {
  return (
    <RequestContainer>
      <div
        style={{
          display: "flex",
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
          <span style={{ marginLeft: "15px", color: "red" }}>{"수락"}</span>
        </h2>
        <h3 style={{ color: "red" }}>13:20 방문 예정</h3>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "10px",
          marginTop: "20px",
        }}
      >
        <Btn style={{ width: "160px" }}>방문 완료</Btn>
      </div>
    </RequestContainer>
  );
};

export default RequestComplete;
