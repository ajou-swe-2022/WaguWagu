import styled from "styled-components";

// page1 page2 page3 page4 마다 보여주는게 다르다
const BackGround = styled.div`
  height: 1024px;
  background-image: ${(props) => props.backgroundImg};
`;

export default BackGround;
