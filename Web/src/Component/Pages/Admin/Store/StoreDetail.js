import {
  DescriptionTitle,
  DescriptionText,
  DescriptionTextArea,
  TimeControl,
  InnerButton,
  InnerText,
  Btn,
} from "./styles";

import { useEffect } from "react";

const convertMinute = (minute) => {
  let hour = parseInt(minute / 60);
  let min = minute % 60;
  return { hour: hour, min: min };
};

const StoreDetail = (props) => {
  useEffect(() => {}, [props.atm]);

  const handleAdder = () => {
    props.handleAtmChange(props.atm + 10);
  };

  const handleDeduction = () => {
    props.handleAtmChange(props.atm - 10);
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <DescriptionTitle style={{ marginBottom: "20px", marginTop: "20px" }}>
          매장명
        </DescriptionTitle>
        <DescriptionText
          onChange={props.handleNameChange}
          value={props.name || ""}
        />
        <Btn
          id="name"
          style={{ marginLeft: "350px", marginTop: "20px" }}
          onClick={props.handlePost}
        >
          수정
        </Btn>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <DescriptionTitle style={{ marginBottom: "20px", marginTop: "20px" }}>
          매장설명
        </DescriptionTitle>
        <DescriptionTextArea
          onChange={props.handleDescriptionChange}
          defaultValue={props.description || ""}
        ></DescriptionTextArea>
        <Btn
          id="description"
          style={{ marginLeft: "350px", marginTop: "20px" }}
          onClick={props.handlePost}
        >
          수정
        </Btn>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <DescriptionTitle style={{ marginBottom: "20px", marginTop: "20px" }}>
          최대 방문 대기 시간 설정
        </DescriptionTitle>
        <TimeControl>
          <InnerButton onClick={handleDeduction}>- 10</InnerButton>
          <InnerText>{`${
            convertMinute(props.atm).hour < 10
              ? `0${convertMinute(props.atm).hour}`
              : `${convertMinute(props.atm).hour}`
          } : ${
            convertMinute(props.atm).min < 10
              ? `0${convertMinute(props.atm).min}`
              : `${convertMinute(props.atm).min}`
          }`}</InnerText>
          <InnerButton onClick={handleAdder}>+ 10</InnerButton>
        </TimeControl>
        <Btn
          id="arriveTimeoutMinutes"
          style={{ marginLeft: "350px", marginTop: "20px" }}
          onClick={props.handlePost}
        >
          수정
        </Btn>
      </div>
    </>
  );
};

export default StoreDetail;
