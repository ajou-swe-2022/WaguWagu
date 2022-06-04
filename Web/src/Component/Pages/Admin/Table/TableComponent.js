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
import { RESERVATION_STATUS } from "@Common/";

import { useState, useEffect } from "react";

const styles = { backgroundColor: "#ffffff", height: "36px", textSize: "24px" };

const TableComponent = (props) => {
  // state
  const [name, setName] = useState(props.el.name);
  const [description, setDescription] = useState(props.el.description);
  const [maxCustomerCount, setMaxCustomerCount] = useState(
    props.el.maxCustomerCount
  );
  const [minOrderAmount, setMinOrderAmount] = useState(props.el.minOrderAmount);

  // occupied
  const [occupied, setOccupied] = useState(false);

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
          maxCustomerCount === 0 ? props.el.maxCustomerCount : maxCustomerCount,
        minOrderAmount:
          minOrderAmount === 0 ? props.el.minOrderAmount : minOrderAmount,
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

  // handleDisabled
  useEffect(() => {
    setOccupied(false);
    if (props.reservations !== undefined) {
      props.reservations.forEach((el) => {
        if (
          el.tableID === props.el.id &&
          el.status === RESERVATION_STATUS.APPROVE
        ) {
          setOccupied(true);
          return;
        }
      });
    }
  }, [props]);

  return (
    <TableContainer style={{ margin: "1px 0px -3px 0px" }}>
      <TableImg src={TABLE_IMG} />
      <TableDataContainer>
        <TableEnabled
          enabled={props.el.enabled}
          style={{
            color: props.el.enabled ? (occupied ? "red" : "green") : "#C4C4C4",
          }}
        >
          {props.el.enabled ? (occupied ? "점유" : "활성") : "비활성"}
        </TableEnabled>
        <div>
          <TableData
            data-tableid={props.el.id}
            placeholder={`${props.el.name}`}
            style={{ ...styles }}
            onChange={handleNameChange}
            disabled={occupied}
          />
          <TableDataLabel>테이블 명</TableDataLabel>
        </div>
        <div>
          <TableData
            data-tableid={props.el.id}
            placeholder={`${props.el.description}`}
            style={{ ...styles }}
            onChange={handleDescriptionChange}
            disabled={occupied}
          />
          <TableDataLabel>설명</TableDataLabel>
        </div>
        <div>
          <TableData
            data-tableid={props.el.id}
            placeholder={`${props.el.maxCustomerCount} 명`}
            style={{ ...styles }}
            onChange={handleMax}
            disabled={occupied}
          />
          <TableDataLabel>인원 제한</TableDataLabel>
        </div>
        <div>
          <TableData
            data-tableid={props.el.id}
            placeholder={`${props.el.minOrderAmount} 원`}
            style={{ ...styles }}
            onChange={handleMin}
            disabled={occupied}
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
            disabled={occupied}
            occupied={occupied}
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
            disabled={occupied}
            occupied={occupied}
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
            disabled={occupied}
            occupied={occupied}
          >
            삭제
          </Btn>
        </div>
      </TableDataContainer>
    </TableContainer>
  );
};

export default TableComponent;
