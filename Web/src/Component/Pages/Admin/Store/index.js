import Header from "@Organisms/Header/";
import Footer from "@Organisms/Footer/";
import Title from "./Title";
import Img from "./Img";
import Store from "./StoreDetail";
import MenuAdd from "./MenuAdd";
import MenuDetail from "./MenuDetail";
import {
  FlexContainer,
  LeftContainer,
  RightContainer,
  StoreContainer,
} from "./styles";

import { USER_KEY, USER_NAME, removeCookie, getCookie } from "@Util/cookie";
import { scrollTop } from "@Util/scrollTop";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  getRestaurantInfo,
  putRestaurantInfo,
  postMenuInfo,
  deleteMenuInfo,
} from "@API";

const AdminTable = () => {
  const navigate = useNavigate();

  // states
  const [loginStatus, setLoginStatus] = useState(false);
  const [render, setRender] = useState(false);

  // store data
  const [data, setData] = useState({});

  // new menu data
  const [newName, setNewName] = useState("");
  const [newCost, setNewCost] = useState(0);

  // ============= left page ============= //

  // handle log-in/out
  const handleLoginout = (menuName, linkTo) => {
    navigate(linkTo);
    if (menuName === "๋ก๊ทธ์์") {
      removeCookie(USER_KEY);
      removeCookie(USER_NAME);
      setLoginStatus(false);
    }
  };

  // handle Store Data
  const handleNameChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      name: e.target.value,
    }));
  };

  const handleDescriptionChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      description: e.target.value,
    }));
  };

  const handleAtmChange = (val) => {
    setData((prevState) => ({
      ...prevState,
      arriveTimeoutMinutes: val,
    }));
  };

  const handleClick = async (e) => {
    const userID = getCookie(USER_KEY);
    console.log(data);
    await putRestaurantInfo({
      userID: userID,
      data: {
        address: data.address,
        addressDetail: data.addressDetail,
        arriveTimeoutMinutes: data.arriveTimeoutMinutes,
        category: data.category,
        description: data.description,
        name: data.name,
        tel: data.tel,
      },
    })
      .then((res) => {
        alert("์๋น ์?๋ณด๊ฐ ๋ณ๊ฒฝ๋์์ต๋๋ค!");
        setRender((cur) => !cur);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // ============= right page ============= //
  // Add Item
  const handleNewNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNewCostChange = (e) => {
    setNewCost(e.target.value);
  };

  const handleAddItem = async (e) => {
    const userID = getCookie(USER_KEY);
    if (newName === "") {
      alert("๋ฉ๋ด๋ฅผ ์๋?ฅํ์ธ์!");

      return;
    }
    await postMenuInfo({
      userID: userID,
      data: { name: newName, price: newCost },
    })
      .then((res) => {
        alert("์ฑ๊ณต์?์ผ๋ก ๋ฑ๋ก๋์์ต๋๋ค");
        setData((prevState) => {
          const newMenu = prevState.menu;
          newMenu.push({ name: newName, price: newCost });
          return { ...prevState, menu: newMenu };
        });
        setRender((cur) => !cur);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // Change Item data (๋ณด๋ฅ)
  // const handleItemPut = (e) => {
  // };

  // Delete Item
  const handleItemDelete = async (e) => {
    const userID = getCookie(USER_KEY);
    console.log(e.target.dataset.id);
    await deleteMenuInfo({
      userID: userID,
      menuID: e.target.dataset.menuid,
    })
      .then(() => {
        alert("๋ฉ๋ด๊ฐ ์ฑ๊ณต์?์ผ๋ก ์ง์์ก์ต๋๋ค!");
        setRender((cur) => !cur);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // ============= useEffect ============= //

  // ์ด๊ธฐ ๋๋๋ง ์ํ useEffect
  useEffect(() => {
    scrollTop();
    const status = getCookie(USER_KEY);
    if (status) setLoginStatus(true);
    else setLoginStatus(false);
    getRestaurantInfo(status).then((res) => {
      setData(res.data);
    });
  }, []);

  // render๊ฐ ๋ณ๊ฒฝ๋๋ฉด useEffect ํธ์ถํด์ ๋งจ ์๋ก ๋์ด์ฌ๋ฆฌ๊ณ? data ๋ค์ ๋ฐ์์ค์
  useEffect(() => {
    const status = getCookie(USER_KEY);
    getRestaurantInfo(status).then((res) => {
      setData(res.data);
    });
  }, [render]);

  return (
    <>
      <Header loginStatus={loginStatus} onClick={handleLoginout} />
      <Title />
      <StoreContainer>
        <FlexContainer>
          <LeftContainer style={{ marginRight: "20px" }}>
            <Img />
            <Store
              name={data.name}
              atm={data.arriveTimeoutMinutes}
              description={data.description}
              handleNameChange={handleNameChange}
              handleAtmChange={handleAtmChange}
              handleDescriptionChange={handleDescriptionChange}
              handlePost={handleClick}
            />
          </LeftContainer>
          <RightContainer style={{ marginLeft: "20px" }}>
            <MenuAdd
              handleNewNameChange={handleNewNameChange}
              handleNewCostChange={handleNewCostChange}
              handleAddItem={handleAddItem}
            />
            <MenuDetail menu={data.menu} del={handleItemDelete} />
          </RightContainer>
        </FlexContainer>
      </StoreContainer>
      <Footer />
    </>
  );
};

export default AdminTable;
