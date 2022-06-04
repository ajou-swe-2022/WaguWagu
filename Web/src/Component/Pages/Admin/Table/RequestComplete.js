import { Btn, RequestContainer } from "./styles";

import { deleteReservationInfo } from "@API";

const RequestComplete = (props) => {
  const convertToDate = (timeStamp) => {
    const date = new Date(timeStamp * 1000 * 1000);
    return {
      year: date.getFullYear(),
      month: date.getMonth(),
      date: date.getDate(),
      hour: date.getHours(),
      minute: date.getMinutes(),
    };
  };

  const handleFinished = async (e) => {
    await deleteReservationInfo(props.el.id)
      .then(() => {
        alert("방문 / 거절 처리 완료");
        props.setOccupiedCount((cur) => cur - 1);
        props.modify();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <RequestContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "30px",
          fontWeight: "700",
          margin: "25px 0px",
          padding: "0px 20px",
        }}
      >
        <h2
          style={{
            display: "flex",
          }}
        >
          {`[테이블] ${props.el.table.name}`}
          <span
            style={{
              marginLeft: "15px",
              color: props.status ? "green" : "red",
            }}
          >
            {props.status ? "수락" : "거절"}
          </span>
        </h2>
        <h3 style={{ color: props.status ? "green" : "red" }}>
          {props.status
            ? `[${convertToDate(props.el.deadlineTime).month + 1}/${
                convertToDate(props.el.deadlineTime).date
              }] ${
                convertToDate(props.el.deadlineTime).hour > 12
                  ? `PM ${convertToDate(props.el.deadlineTime).hour - 12}`
                  : `AM ${convertToDate(props.el.deadlineTime).hour}`
              } : ${convertToDate(props.el.deadlineTime).minute} 방문`
            : "거절됨"}
        </h3>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "10px",
          marginTop: "20px",
        }}
      >
        <Btn style={{ width: "160px" }} onClick={handleFinished}>
          {props.status ? "방문 완료" : "내역 제거"}
        </Btn>
      </div>
    </RequestContainer>
  );
};

export default RequestComplete;
