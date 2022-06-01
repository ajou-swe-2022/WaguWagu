import {
  EditContainer,
  EditText,
  MenuContainer,
  MenuImg,
  MenuDataContainer,
  MenuData,
  Btn,
  MenuBtns,
} from "./styles";

import { FOOD_IMG } from "@Common";

import { useEffect } from "react";

const MenuDetail = (props) => {
  const renderItems = () => {
    // props.menu가 내려왔을 때 rendering을 시켜주어야 함
    // data- 로 시작하는 속성으로 특정 값을 DOM내부에 저장해줄 수 있다.
    if (props.menu)
      return props.menu.map((el) => {
        return (
          <MenuContainer style={{ margin: "1px 0px -3px 0px" }}>
            <MenuImg src={FOOD_IMG} />
            <MenuDataContainer>
              <MenuData
                value={el.name}
                style={{ backgroundColor: "#ffffff", border: "none" }}
                disabled
              ></MenuData>
              <MenuData
                value={`${el.price} 원`}
                style={{ backgroundColor: "#ffffff", border: "none" }}
                disabled
              ></MenuData>
            </MenuDataContainer>
            <MenuBtns>
              <Btn
                style={{
                  width: "160px",
                  margin: "80px 8px 0px 8px",
                }}
                onClick={props.del}
                data-menuID={el.id}
              >
                제거
              </Btn>
            </MenuBtns>
          </MenuContainer>
        );
      });
    else return;
  };

  // props.menu가 내려왔을 때 그때 rendering을 한번 더 시켜줌
  useEffect(() => {}, [props.menu]);

  return (
    <>
      <div style={{ marginTop: "30px" }}>
        <EditContainer style={{ marginLeft: "550px" }}>
          <EditText>{"메뉴"}</EditText>
        </EditContainer>
      </div>

      <div style={{ height: "1000px", overflow: "auto" }}>{renderItems()}</div>
    </>
  );
};

export default MenuDetail;
