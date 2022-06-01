import { EDIT_VECTOR, IMG_UNAVAILABLE_VECTOR, MR_CHEF_IMG } from "@Common/";
import {
  IMGContainer,
  IMGBox,
  EditContainer,
  EditVector,
  EditText,
  IMGPreview,
  IMGLabel,
} from "./styles";

import { useState, useEffect } from "react";
import { getCookie, USER_KEY } from "@Common/Util/cookie";

const Img = (props) => {
  const [img, setImg] = useState(IMG_UNAVAILABLE_VECTOR);

  const passImage = (e) => {
    const files = e.target.files;

    if (files.length !== 0) {
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = (e) => {
        setImg(e.target.result);
      };
    } else {
      setImg(IMG_UNAVAILABLE_VECTOR);
      props.setImg(img);
    }
  };

  useEffect(() => {
    if (getCookie(USER_KEY) === "432-234") {
      setImg(MR_CHEF_IMG);
    }
  }, []);

  return (
    <IMGContainer>
      <EditContainer>
        <EditVector src={EDIT_VECTOR} />
        <EditText>{"매장정보 수정"}</EditText>
      </EditContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <IMGPreview
          id="img-preview"
          onerror="this.style.display='none'"
          src={img}
        />
        <IMGLabel htmlFor="img">{"업로드"}</IMGLabel>
        <IMGBox type="file" id="img" accept="image/*" onChange={passImage} />
      </div>
    </IMGContainer>
  );
};

export default Img;
