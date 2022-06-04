import { EditContainer, EditText } from "./styles";
import TableComponent from "./TableComponent";

import { useEffect } from "react";

const TableGroup = (props) => {
  // props.menu가 내려왔을 때 그때 rendering을 한번 더 시켜줌
  useEffect(() => {}, [props.tables, props.reservations]);

  const renderItems = () => {
    // props.menu가 내려왔을 때 rendering을 시켜주어야 함
    // data- 로 시작하는 속성으로 특정 값을 DOM내부에 저장해줄 수 있다.
    if (props.tables) {
      return props.tables.map((el) => {
        return (
          <TableComponent
            el={el}
            sleepAndWake={props.sleepAndWake}
            delete={props.delete}
            modify={props.modify}
            reservations={props.reservations}
          />
        );
      });
    } else return;
  };

  return (
    <>
      <div style={{ marginTop: "30px" }}>
        <EditContainer style={{ marginLeft: "410px" }}>
          <EditText>{"활성 / 비활성 처리"}</EditText>
        </EditContainer>
      </div>

      <div style={{ height: "1000px", overflow: "auto" }}>{renderItems()}</div>
    </>
  );
};

export default TableGroup;
