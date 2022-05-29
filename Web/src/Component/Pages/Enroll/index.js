import Phase01 from "./Phase01";
import Phase02 from "./Phase02";

import { FullFrame } from "./styles";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getIDValidation } from "@API";

const Enroll = () => {
  // navigate
  const navigate = useNavigate();

  // Backwards
  const navigateBack = () => {
    navigate("/main");
  };

  // phase
  const [phaseAbled, setPhaseAbled] = useState(2);

  // Data for Post(1)
  const [name, setName] = useState("");
  const [tell, setTell] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPW] = useState("");

  // Data for Post(2)
  const [id, setID] = useState("");
  const [category, setCategory] = useState("ASIAN");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  // Phase_OBJ
  const Phase_OBJ = [
    [
      { id: "name", obj: setName, val: name },
      { id: "tell", obj: setTell, val: tell },
      { id: "email", obj: setEmail, val: email },
      { id: "pw", obj: setPW, val: pw },
    ],
    [
      { id: "id", obj: setID, val: id },
      { id: "category", obj: setCategory, val: category },
      { id: "address", obj: setAddress, val: address },
      { id: "addressDetail", obj: setAddressDetail, val: addressDetail },
    ],
  ];

  // Handler for phase1
  const emailVaildationCheck = async (e) => {
    if (email === "") {
      alert("아이디를 필수로 입력해주세요!");
      setPhaseAbled(1);
      return;
    }
    await getIDValidation(email)
      .then(() => {
        alert("이미 존재하는 아이디 입니다!");
        setPhaseAbled(1.5);
      })
      .catch(() => {
        alert("사용가능한 아이디입니다!");
        // 변경 불가능하도록 제한
        document.querySelector("#email").disabled = true;
        setPhaseAbled((cur) => {
          if (cur < 2) setPhaseAbled(1.7);
          else return cur;
        });
      });
  };

  const validationCheck01 = () => {
    const emptyStates = Phase_OBJ[0].filter((el) => el.val === "");
    if (emptyStates.length !== 0) {
      alert("빈 항목들을 채워주세요!");
      return;
    } else {
      if (phaseAbled < 1.7) {
        alert("아이디 중복확인을 진행해주세요!");
        return;
      }
      setPhaseAbled(2);
      return;
    }
  };

  const handleInput01 = (e) => {
    const objMatches = Phase_OBJ[0].map((el) => {
      return {
        el,
        isMatch: el.id === e.target.id,
      };
    });

    const matchingSet = objMatches.find((el) => el.isMatch);
    matchingSet.el.obj(e.target.value);
  };

  // Handler for phase2
  const handleIDInput = (e) => {
    setID(e.target.value);
  };

  const validationCheck02 = () => {
    const emptyStates = Phase_OBJ[1].filter((el) => el.val === "");
    if (emptyStates.length !== 0) {
      alert("빈 항목들을 채워주세요!");
      return;
    } else {
      setPhaseAbled(3);
      return;
    }
  };

  // useEffect
  useEffect(() => {
    console.log(
      `category : ${category} state : ${phaseAbled} email : ${email} id : ${id}`
    );
  }, [category, phaseAbled, name, tell, email, pw, id]);

  // Render Component
  const renderItems = (phaseAbled) => {
    if (phaseAbled < 2)
      return (
        <Phase01
          onChange={handleInput01}
          idCheck={emailVaildationCheck}
          onClick={validationCheck01}
          popBack={navigateBack}
        ></Phase01>
      );
    else if (phaseAbled >= 2 || phaseAbled < 3)
      return (
        <Phase02
          setCategory={setCategory}
          category={category}
          onChange={handleIDInput}
          onClick={validationCheck02}
        ></Phase02>
      );
    else return;
  };

  return <FullFrame>{renderItems(phaseAbled)}</FullFrame>;
};

export default Enroll;
