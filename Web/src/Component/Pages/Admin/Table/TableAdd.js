import {
  EditContainer,
  EditVector,
  EditText,
  TableContainer,
  TableDataContainer,
  TableImg,
  TableData,
  Btn,
} from "./styles";

import { EDIT_VECTOR, TABLE_IMG } from "@Common";

const TableAdd = (props) => {
  return (
    <div>
      <EditContainer>
        <EditVector src={EDIT_VECTOR} />
        <EditText>{"메뉴 수정"}</EditText>
      </EditContainer>
      <TableContainer>
        <TableImg src={TABLE_IMG} />
        <TableDataContainer>
          <TableData
            id="new-name"
            placeholder={" 테이블명 입력"}
            onChange={props.handleTableInput}
            style={{ width: "350px" }}
          ></TableData>
          <TableData
            id="new-description"
            placeholder={" 테이블 설명 입력"}
            onChange={props.handleTableInput}
            style={{ width: "350px" }}
          ></TableData>
          <TableData
            id="new-maxCustomerCount"
            placeholder={" 제한 인원수 입력"}
            onChange={props.handleTableInput}
            style={{ width: "350px" }}
          ></TableData>
          <TableData
            id="new-minOrderAmount"
            placeholder={" 최소주문금액 입력"}
            onChange={props.handleTableInput}
            style={{ width: "350px" }}
          ></TableData>
          <Btn
            style={{
              margin: "10px 0px 0px 230px",
            }}
            onClick={props.handleTableAdd}
          >
            추가
          </Btn>
        </TableDataContainer>
      </TableContainer>
    </div>
  );
};

export default TableAdd;
