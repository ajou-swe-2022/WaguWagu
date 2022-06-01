import {
  TableContainer,
  TableImg,
  TableDataContainer,
  TableEnabled,
  TableData,
  TableDataLabel,
  Btn,
} from "./styles";

import { TABLE_IMG } from "@Common";
import { getCookie, USER_KEY } from "@Common/Util/cookie";
import { putTableInfo } from "@API/";

import { useState } from "react";

const styles = { backgroundColor: "#ffffff", height: "36px", textSize: "24px" };

const TableComponent = (props) => {
  // state
  const [name, setName] = useState(props.el.name);
  const [description, setDescription] = useState(props.el.description);
  const [maxCustomerCount, setMaxCustomerCount] = useState(
    props.el.maxCustomerCount
  );
  const [minOrderAmount, setMinOrderAmount] = useState(props.el.minOrderAmount);

  // handleChange
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleMax = (e) => {
    setMaxCustomerCount(e.target.value);
  };

  const handleMin = (e) => {
    setMinOrderAmount(e.target.value);
  };

  // handleModify
  const handleModify = async (e) => {
    const userID = getCookie(USER_KEY);
    const tableID = props.el.id;
    await putTableInfo({
      userID: userID,
      tableID: tableID,
      data: {
        description: description === "" ? props.el.description : description,
        enabled: props.el.enabled,
        maxCustomerCount:
          maxCustomerCount === ""
            ? props.el.maxCustomerCount
            : maxCustomerCount,
        minOrderAmount:
          minOrderAmount === "" ? props.el.minOrderAmount : minOrderAmount,
        name: name === "" ? props.el.name : name,
      },
    })
      .then((res) => {
        alert(`${props.el.name} 테이블 수정완료`);
        props.modify();
      })
      .catch((err) => {
        alert("테이블명이 중복되었습니다!");
      });
  };

  return (
    <TableContainer style={{ margin: "1px 0px -3px 0px" }}>
      <TableImg src={TABLE_IMG} />
      <TableDataContainer>
        <TableEnabled enabled={props.el.enabled}>
          {props.el.enabled ? "가용" : "비활성"}
        </TableEnabled>
        <div>
          <TableData
            data-tableid={props.el.id}
            placeholder={`${props.el.name}`}
            style={{ ...styles }}
            onChange={handleNameChange}
          />
          <TableDataLabel>테이블 명</TableDataLabel>
        </div>
        <div>
          <TableData
            data-tableid={props.el.id}
            placeholder={`${props.el.description}`}
            style={{ ...styles }}
            onChange={handleDescriptionChange}
          />
          <TableDataLabel>설명</TableDataLabel>
        </div>
        <div>
          <TableData
            data-tableid={props.el.id}
            placeholder={`${props.el.maxCustomerCount} 명`}
            style={{ ...styles }}
            onChange={handleMax}
          />
          <TableDataLabel>인원 제한</TableDataLabel>
        </div>
        <div>
          <TableData
            data-tableid={props.el.id}
            placeholder={`${props.el.minOrderAmount} 원`}
            style={{ ...styles }}
            onChange={handleMin}
          />
          <TableDataLabel>최소주문금액</TableDataLabel>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "10px",
          }}
        >
          <Btn
            style={{
              width: "80px",
            }}
            data-tableid={props.el.id}
            onClick={handleModify}
          >
            수정
          </Btn>
          <Btn
            style={{
              width: "100px",
              marginLeft: "10px",
            }}
            onClick={props.sleepAndWake}
            data-tableid={props.el.id}
          >
            {props.el.enabled ? "비활성" : "활성"}
          </Btn>
          <Btn
            style={{
              width: "80px",
              marginLeft: "10px",
            }}
            onClick={props.delete}
            data-tableid={props.el.id}
          >
            삭제
          </Btn>
        </div>
      </TableDataContainer>
    </TableContainer>
  );
};

export default TableComponent;
