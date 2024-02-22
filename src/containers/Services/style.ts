import styled from "styled-components";
import { ReactComponent as SpaSVG } from "../../assets/svg/material-symbols_spa-outline.svg";
import { ReactComponent as BusinessSVG } from "../../assets/svg/dashicons_businessman.svg";
import { ReactComponent as SwimmingSVG } from "../../assets/svg/fluent_swimming-pool-20-filled.svg";
import { ReactComponent as ConciergeSVG } from "../../assets/svg/material-symbols_concierge-outline.svg";
import { ReactComponent as LaundrySVG } from "../../assets/svg/material-symbols_laundry-outline.svg";
import { ReactComponent as ParkingSVG } from "../../assets/svg/icon-park-outline_parking.svg";
import { ReactComponent as KitchenSVG } from "../../assets/svg/ri_restaurant-2-line.svg";
import { ReactComponent as CleaningSVG } from "../../assets/svg/guidance_cleaning-room.svg";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 882px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  margin-top: 160px;
`;

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Alegreya Sans", sans-serif;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SubTitle = styled.h2`
  margin: 0;
  font-size: 30px;
  font-weight: 400;
`;

export const Title = styled.h1`
  margin: 0;
  font-family: "Literata", serif;
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const List = styled.div`
  max-width: 1070px;
  width: 100%;
  display: flex;
  gap: 35px;
  flex-wrap: wrap;
  margin-top: 69px;
`;

export const Item = styled.div`
  max-width: 240px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 5px;
`;

export const ItemLogo = styled.div`
  max-width: 60px;
  width: 100%;
`;

export const ItemTitle = styled.h3`
  margin: 0;
  font-size: 20px;
  text-align: center;
  font-weight: 400;
`;

export const ItemContent = styled.p`
  margin: 0;
  font-size: 14px;
  text-align: center;
`;

export const ItemSpaLogo = styled(SpaSVG)``;
export const ItemBusinessLogo = styled(BusinessSVG)``;
export const ItemSwimmingLogo = styled(SwimmingSVG)``;
export const ItemConciergeLogo = styled(ConciergeSVG)``;
export const ItemLaundryLogo = styled(LaundrySVG)``;
export const ItemParkingLogo = styled(ParkingSVG)``;
export const ItemKitchenLogo = styled(KitchenSVG)``;
export const ItemCleaningLogo = styled(CleaningSVG)``;
