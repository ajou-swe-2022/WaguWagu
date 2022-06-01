import { EditContainer, EditText, EditVector } from "./styles";
import RequestComplete from "./RequestComplete";
import RequestPending from "./RequestPending";

import { CHECK_VECTOR } from "@Common";

const RequestGroup = () => {
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
      <RequestComplete></RequestComplete>
      <RequestPending></RequestPending>
      <RequestPending></RequestPending>
    </div>
  );
};

export default RequestGroup;
