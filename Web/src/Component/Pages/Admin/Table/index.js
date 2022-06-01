import {
  StoreContainer,
  FlexContainer,
  LeftContainer,
  RightContainer,
} from "./styles";

import Header from "@Organisms/Header/";
import Footer from "@Organisms/Footer/";
import Title from "./Title";
import TableAdd from "./TableAdd";
import TableGroup from "./TableGroup";
import Chart from "./Chart";
import RequestGroup from "./RequestGroup";

import { USER_KEY, USER_NAME, removeCookie, getCookie } from "@Util/cookie";
import { scrollTop } from "@Util/scrollTop";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  getTableInfo,
  postTableInfo,
  deleteTableInfo,
  putTableInfo,
} from "@API/";

const AdminTable = () => {
  // login
  const navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useState(false);

  // data
  const [data, setData] = useState({});

  const [newTable, setNewTable] = useState({
    name: "",
    description: "",
    maxCustomerCount: 0,
    minOrderAmout: 0,
  });

  //render
  const [render, setRender] = useState(true);

  const handleLoginout = (menuName, linkTo) => {
    navigate(linkTo);
    if (menuName === "로그아웃") {
      removeCookie(USER_KEY);
      removeCookie(USER_NAME);
      setLoginStatus(false);
    }
  };

  // TableList
  // Adjust Table
  const handleTableInput = (e) => {
    switch (e.target.id) {
      case "new-name":
        setNewTable((prev) => ({
          ...prev,
          name: e.target.value,
        }));
        break;
      case "new-description":
        setNewTable((prev) => ({
          ...prev,
          description: e.target.value,
        }));
        break;
      case "new-maxCustomerCount":
        setNewTable((prev) => ({
          ...prev,
          maxCustomerCount: e.target.value,
        }));
        break;
      case "new-minOrderAmount":
        setNewTable((prev) => ({
          ...prev,
          minOrderAmount: e.target.value,
        }));
        break;
      default:
        break;
    }
  };

  // Add Table : 다른 효율적인 방법을 찾고 싶다.. 일단은 진행..!
  const handleTableAdd = async (e) => {
    const userID = getCookie(USER_KEY);
    await postTableInfo({ userID: userID, data: newTable })
      .then((res) => {
        alert("테이블 정보가 추가되었습니다!");
        setRender((cur) => !cur);
      })
      .catch((err) => {
        alert("테이블 명이 중복되었습니다!");
      });
  };

  // Adjust Table
  const handleModify = () => {
    setRender((cur) => !cur);
  };

  // Enable Table
  const handleSleepAndWake = async (e) => {
    const userID = getCookie(USER_KEY);
    const targetID = e.target.dataset.tableid;
    const targetTable = data.tables.filter((el) => `${el.id}` === targetID)[0];

    putTableInfo({
      userID: userID,
      tableID: targetID,
      data: {
        description: targetTable.description,
        enabled: !targetTable.enabled,
        maxCustomerCount: targetTable.maxCustomerCount,
        minOrderAmount: targetTable.minOrderAmount,
        name: targetTable.name,
      },
    })
      .then((res) => {
        setRender((cur) => !cur);
      })
      .catch((err) => console.error(err));
  };

  // Delete Table :
  const handleDelete = async (e) => {
    const userID = getCookie(USER_KEY);
    await deleteTableInfo({
      userID: userID,
      tableID: e.target.dataset.tableid,
    })
      .then((res) => {
        alert("테이블 제거가 완료되었습니다!");
        setRender((cur) => !cur);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // Chart

  // RequestList

  // UseEffect
  useEffect(() => {
    scrollTop();
    const status = getCookie(USER_KEY);
    if (status) {
      setLoginStatus(true);
    } else {
      setLoginStatus(false);
    }
    getTableInfo(status).then((res) => {
      setData(res.data);
    });
  }, []);

  useEffect(() => {
    const status = getCookie(USER_KEY);
    getTableInfo(status).then((res) => {
      setData(res.data);
    });
  }, [render]);

  return (
    <>
      <Header loginStatus={loginStatus} onClick={handleLoginout} />
      <Title />
      <StoreContainer>
        <FlexContainer>
          <LeftContainer>
            <TableAdd
              handleTableInput={handleTableInput}
              handleTableAdd={handleTableAdd}
            />
            <TableGroup
              tables={data.tables}
              modify={handleModify}
              sleepAndWake={handleSleepAndWake}
              delete={handleDelete}
            />
          </LeftContainer>
          <RightContainer>
            <div style={{ height: "500px", width: "500px", marginTop: "70px" }}>
              <Chart data={data.tables} />
              <RequestGroup />
            </div>
          </RightContainer>
        </FlexContainer>
      </StoreContainer>
      <Footer />
    </>
  );
};

export default AdminTable;
