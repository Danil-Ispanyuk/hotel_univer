import styled from "styled-components";
import backgroundImage from "../../assets/images/home_bg.png";
import {ReactComponent as arrowDown} from "../../assets/svg/ei_arrow-down.svg";

export const Wrapper = styled.div`
  background-image: url(${backgroundImage});
  width: 100%;
  height: 100vh;
  max-height: 845px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100% - 86px);
  margin: 0 20px;
  position: relative;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 380px;
  color: #fff;
`;

export const Title = styled.h1`
  font-family: "Literata", serif;
  font-size: 80px;
  font-weight: 700;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
`;

export const Subtitle = styled.div`
  border-top: 1px solid #fff;
  padding-top: 7px;
  font-size: 30px;
  font-family: "Josefin Sans", sans-serif;
`;

export const Details = styled.div`
  max-width: 615px;
  width: 100%;
  position: relative;
  padding-top: 35px;
  padding-bottom: 28px;
  z-index: 2;
  background-color: #00000040;
  margin-top: 105px;
  gap: 72px;
  display: flex;
  justify-content: center;
  &::after {
    content: "";
    display: block;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        95.87deg,
        rgba(255, 255, 255, 0.486) 3.2%,
        rgba(255, 255, 255, 0.246) 53.12%,
        rgba(255, 255, 255, 0.336) 100.13%
      );
    
  }
`;

export const DetailItemContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Josefin Sans", sans-serif;
  color: #fff;
`

export const DetailItemTitle = styled.h2 `
  margin: 0;
  padding: 0;
  font-size: 50px;
`

export const DetailItemDescription = styled.p `
  font-size: 18px;
  font-family: "Alegreya Sans", sans-serif;
  margin: 0;
  padding: 0;
`
export const MoveDownContainer = styled.a `
  width: 148px;
  height: 148px;
  border-radius: 148px;
  background-color: #F7F7F7;
  position: absolute;
  display: flex;
  justify-content: center;
  bottom: -74px;
`

export const IconDown = styled(arrowDown)`
  margin-top: 15px;
  object-fit: cover;
`
