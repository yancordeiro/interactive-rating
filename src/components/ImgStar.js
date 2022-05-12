import styled from "styled-components";
import img from "../images/icon-star.svg";

const ImgStar = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-color: hsl(210, 11%, 25%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
`;

export default ImgStar;
