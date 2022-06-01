import {
  EditContainer,
  EditVector,
  EditText,
  MenuContainer,
  MenuImg,
  MenuDataContainer,
  MenuData,
  Btn,
  MenuBtns,
} from "./styles";

import { EDIT_VECTOR, FOOD_IMG } from "@Common";

const MenuAdd = (props) => {
  return (
    <div>
      <EditContainer>
        <EditVector src={EDIT_VECTOR} />
        <EditText>{"메뉴 수정"}</EditText>
      </EditContainer>
      <MenuContainer>
        <MenuImg src={FOOD_IMG} />
        <MenuDataContainer>
          <MenuData
            placeholder={" 메뉴명 입력"}
            onChange={props.handleNewNameChange}
          ></MenuData>
          <MenuData
            placeholder={" 가격 입력"}
            onChange={props.handleNewCostChange}
          ></MenuData>
        </MenuDataContainer>
        <MenuBtns>
          <Btn
            style={{
              width: "160px",
              margin: "80px 8px 0px 8px",
            }}
            onClick={props.handleAddItem}
          >
            추가
          </Btn>
        </MenuBtns>
      </MenuContainer>
    </div>
  );
};

export default MenuAdd;
