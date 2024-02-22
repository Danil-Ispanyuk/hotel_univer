import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  margin-top: 160px;
`;

export const Container = styled.div`
  max-width: 1240px;
  width: 100%;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  margin: 0;
  font-size: 50px;
  font-family: "Literata", serif;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Line = styled.div`
    max-width: 572px;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    margin: 20px 0;
`;

export const DetailContent = styled.div`
  max-width: 820px;
  width: 100%;
  text-align: center;
  font-family: "Alegreya Sans", sans-serif;
  margin-bottom: 98px;
`;

export const RoomsWrapper = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 118px;
    align-items: center;
`

export const RoomsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: "Alegreya Sans", sans-serif;
`;

export const RoomsTitle = styled.div`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`;

export const RoomsContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 46px;
`;

export const Room = styled.div`
    max-width: 383px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const RoomLogo = styled.div`
    width: 100%;
    height: 212px;
`;

export const RoomTitle = styled.div`
    margin-top: 22px;
    font-size: 30px;
    font-weight: 700;
`;

export const RoomContent = styled.div`
    font-size: 20px;
    margin: 10px 0;
`;

export const RoomPrice = styled.div`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 30px;
`;
