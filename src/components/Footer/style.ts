import styled from "styled-components";
import { ReactComponent as AppLogo } from "../../assets/svg/full_logo.svg";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #000;
  display: flex;
  justify-content: center;
  margin-top: 162px;
  padding-top: 41px;
  padding-bottom: 75px;
`;

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  align-items: center;
  position: relative;
`;

export const Logo = styled(AppLogo)`
  width: 125px;
  height: 55px;
  object-fit: contain;
`;
export const Navigation = styled.ul`
  display: flex;
  width: 100%;
  gap: 47px;
  align-items: center;
  cursor: pointer;
  & li {
    font-size: 20px;
    color: #fff;
    list-style: none;
  }
`;

export const FooterCompanyName = styled.div`
  font-family: "Josefin Sans", sans-serif;
  position: absolute;
  color: #fff;
  right: -250px;
  bottom: 15px;
  font-size: 22px;
  text-align: center;
  text-transform: uppercase;
`;
