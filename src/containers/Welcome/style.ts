import styled from "styled-components";
import backgroundImage from "../../assets/images/welcome_bg.png";
import { ReactComponent as WiFiLogoSVG } from "../../assets/svg/material-symbols_wifi.svg";
import { ReactComponent as MarkerLogoSVG } from "../../assets/svg/ic_outline-place.svg";
import { ReactComponent as PianoLogoSVG } from "../../assets/svg/game-icons_grand-piano.svg";
import { ReactComponent as SoftLogoSVG } from "../../assets/svg/mdi_family-room-outline.svg";

export const Wrapper = styled.div`
  background-image: url(${backgroundImage});
  width: 100%;
  height: 100vh;
  max-height: 977px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Details = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Subtitle = styled.h2`
  margin: 0;
  font-size: 30px;
  font-weight: 400;
  font-family: "Alegreya Sans", sans-serif;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Line = styled.span`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.h1`
  width: 100%;
  margin: 0;
  text-align: center;
  font-size: 50px;
  font-family: "Literata", serif;
  color: ${({ theme }) => theme.colors.primary};
`;

export const DetailContent = styled.div`
    max-width: 720px;
    width: 100%;
    margin-top: 39px;
    font-size: 20px;
    font-family: "Alegreya Sans", sans-serif;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Text = styled.p`
    padding: 0;
    margin: 0;
    text-align: center;
`;

export const List = styled.div`
    margin-top: 40px;
    display: flex;
    gap: 50px;
    align-items: center;
`;


export const ListItem = styled.div`
    max-width: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const WifiLogo = styled(WiFiLogoSVG)``;
export const MarkerLogo = styled(MarkerLogoSVG)``;
export const PianoLogo = styled(PianoLogoSVG)``;
export const SoftLogo = styled(SoftLogoSVG)``;

export const ListItemText = styled.p`
    font-size: 20px;
    text-align: center;
`;
