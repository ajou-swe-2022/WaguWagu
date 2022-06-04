import {
  EditContainer,
  EditText,
  EditVector,
  RequestContainer,
} from "./styles";
import RequestComplete from "./RequestComplete";
import RequestPending from "./RequestPending";

import { CHECK_VECTOR, RESERVATION_STATUS } from "@Common";

const RequestGroup = (props) => {
  const renderItems = () => {
    if (props.reservations !== undefined) {
      if (props.reservations.length !== 0) {
        return props.reservations.map((el) => {
          if (el.status === RESERVATION_STATUS.REQUEST) {
            return (
              <RequestPending
                el={el}
                modify={props.modify}
                setOccupiedCount={props.setOccupiedCount}
              ></RequestPending>
            );
          } else if (el.status === RESERVATION_STATUS.APPROVE) {
            return (
              <RequestComplete
                el={el}
                modify={props.modify}
                status={true}
                setOccupiedCount={props.setOccupiedCount}
              ></RequestComplete>
            );
          } else if (el.status === RESERVATION_STATUS.REJECT) {
            return (
              <RequestComplete
                el={el}
                modify={props.modify}
                status={false}
              ></RequestComplete>
            );
          } else return <></>;
        });
      } else {
        return (
          <RequestContainer
            style={{
              display: "flex",
              padding: "20px 10px 0px 0px",
              alignItems: "flex-end",
              borderBottom: "none",
              fontSize: "30px",
              fontWeight: "700",
            }}
          >
            요청이 없습니다!
          </RequestContainer>
        );
      }
    } else return;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        height: "730px",
      }}
    >
      <EditContainer>
        <EditVector src={CHECK_VECTOR} />
        <EditText>{"요청 처리"}</EditText>
      </EditContainer>
      {renderItems()}
    </div>
  );
};

export default RequestGroup;
