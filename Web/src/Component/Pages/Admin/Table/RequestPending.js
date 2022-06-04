import {
  RequestContainer,
  Btn,
  BtnContainer,
  BtnOperator,
  BtnDisplay,
} from "./styles";

import { putReservationInfo } from "@API";
import { RESERVATION_STATUS } from "@Common";

import { useState, useEffect } from "react";

const RequestPending = (props) => {
  const [hour, setHour] = useState(12);
  const [minute, setMinute] = useState(30);
  const [addLimit, setAddLimit] = useState(
    props.el.restaurant.arriveTimeoutMinutes
  );
  const [deductLimit, setDeductLimit] = useState(0);

  const handleAdd = (e) => {
    if (addLimit - 10 >= 0) {
      setAddLimit((cur) => cur - 10);
      setDeductLimit((cur) => cur + 10);
      handleTimeShift(+10);
    }
  };

  const handleDeduction = (e) => {
    if (deductLimit > 0) {
      setAddLimit((cur) => cur + 10);
      setDeductLimit((cur) => cur - 10);
      handleTimeShift(-10);
    }
  };

  const handleTimeShift = (change) => {
    if (minute + change >= 60) {
      if (hour + 1 > 23) setHour(0);
      else setHour((cur) => cur + 1);
      setMinute((cur) => cur + change - 60);
    } else if (minute + change < 0) {
      if (hour - 1 < 0) setHour(23);
      else setHour((cur) => cur - 1);
      setMinute((cur) => 60 + cur + change);
    } else {
      setMinute((cur) => cur + change);
    }
  };

  const handleApprove = async (e) => {
    await putReservationInfo({
      reservationID: props.el.id,
      data: {
        "restaurantID": props.el.restaurantID,
        "status": RESERVATION_STATUS.APPROVE,
        "deadlineTime": props.el.createdTimeAt + 60 * deductLimit,
      },
    })
      .then((res) => {
        alert("수락이 완료되었습니다!");
        props.setOccupiedCount((cur) => cur + 1);
        props.modify();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleDeny = async (e) => {
    await putReservationInfo({
      reservationID: props.el.id,
      data: {
        "restaurantID": props.el.restaurantID,
        "status": RESERVATION_STATUS.REJECT,
        "deadlineTime": props.el.createdTimeAt + 60 * deductLimit,
      },
    })
      .then((res) => {
        alert("거절이 완료되었습니다!");
        props.modify();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    const date = new Date(props.el.createdTimeAt * 1000);
    setHour(date.getHours());
    setMinute(date.getMinutes());
  }, [props.el.createdTimeAt]);

  return (
    <RequestContainer>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: "30px",
          fontWeight: "700",
          margin: "25px 20px",
        }}
      >
        <h2
          style={{
            display: "flex",
          }}
        >
          {`테이블 / ${props.el.table.name}`}
          <span style={{ marginLeft: "15px" }}>{"요청"}</span>
        </h2>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Btn
            style={{ width: "80px", margin: "0px 36px" }}
            onClick={handleApprove}
          >
            수락
          </Btn>
          <Btn style={{ width: "80px" }} onClick={handleDeny}>
            거절
          </Btn>
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <h2
          style={{
            margin: "40px 0px 0px 20px",
            fontWeight: "700",
          }}
        >
          {`방문 제한 시간 설정 (${props.el.restaurant.arriveTimeoutMinutes}분)`}
        </h2>
        <BtnContainer style={{ marginLeft: "90px" }}>
          <BtnOperator
            style={{
              borderRight: "3px solid #FDB165",
              marginRight: "50px",
              color: deductLimit - 10 >= 0 ? "#000000" : "#C4C4C4",
              cursor: deductLimit - 10 >= 0 ? "pointer" : "default",
            }}
            onClick={handleDeduction}
          >
            -10
          </BtnOperator>
          <BtnDisplay>{`${hour < 10 ? `0${hour}` : `${hour}`}:${
            minute < 10 ? `0${minute}` : `${minute}`
          }`}</BtnDisplay>
          <BtnOperator
            style={{
              borderLeft: "3px solid #FDB165",
              marginLeft: "50px",
              color: addLimit - 10 >= 0 ? "#000000" : "#C4C4C4",
              cursor: addLimit - 10 >= 0 ? "pointer" : "default",
            }}
            onClick={handleAdd}
          >
            +10
          </BtnOperator>
        </BtnContainer>
      </div>
    </RequestContainer>
  );
};

export default RequestPending;
