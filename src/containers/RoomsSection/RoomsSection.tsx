import React from "react";
import * as Styled from "./style";
import StandartFirst from "../../assets/images/room_standart_1.png";
import StandartSecond from "../../assets/images/room_standart_2.png";
import StandartThird from "../../assets/images/room_standart_3.png";
import SuiteRoomFirst from "../../assets/images/room_junior_suite_1.png";
import SuiteRoomSecond from "../../assets/images/room_junior_suite_2.png";
import SuiteRoomThird from "../../assets/images/room_junior_suite_3.png";
import LuxRoomFirst from "../../assets/images/room_lux_1.png";
import LuxRoomSecond from "../../assets/images/room_lux_2.png";
import LuxRoomThird from "../../assets/images/room_lux_3.png";

export const RoomsSection = () => {
  return (
    <Styled.Wrapper id="rooms">
      <Styled.Container>
        <Styled.Details>
          <Styled.Title>Номери</Styled.Title>
          <Styled.Line />
          <Styled.DetailContent>
            Premier Hotel в Харкові пропонує розкішне проживання в різноманітних
            номерах, щоб задовольнити різні потреби та очікування гостей.
            Незалежно від того, чи обираєте ви звичайний номер, напівлюкс або
            люкс, кожен номер вражає своєю елегантністю та комфортом.
          </Styled.DetailContent>
        </Styled.Details>
        <Styled.RoomsWrapper>
            <Styled.RoomsContainer>
            <Styled.RoomsTitle>Приклад звичайних номерів</Styled.RoomsTitle>
            <Styled.RoomsContent>
                <Styled.Room>
                <Styled.RoomLogo>
                    <img src={StandartFirst} alt="" />
                </Styled.RoomLogo>
                <Styled.RoomTitle>Звичайний-1</Styled.RoomTitle>
                <Styled.RoomContent>
                    1 особа / односпальне ліжко
                </Styled.RoomContent>
                <Styled.RoomPrice>1000 грн/ніч</Styled.RoomPrice>
                </Styled.Room>
                <Styled.Room>
                <Styled.RoomLogo>
                    <img src={StandartSecond} alt="" />
                </Styled.RoomLogo>
                <Styled.RoomTitle>Звичайний-2</Styled.RoomTitle>
                <Styled.RoomContent>
                    2 особа / односпальне ліжко
                </Styled.RoomContent>
                <Styled.RoomPrice>1200 грн/ніч</Styled.RoomPrice>
                </Styled.Room>
                <Styled.Room>
                <Styled.RoomLogo>
                    <img src={StandartThird} alt="" />
                </Styled.RoomLogo>
                <Styled.RoomTitle>Звичайний-4</Styled.RoomTitle>
                <Styled.RoomContent>
                    4 особа / односпальне ліжко
                </Styled.RoomContent>
                <Styled.RoomPrice>1400 грн/ніч</Styled.RoomPrice>
                </Styled.Room>
            </Styled.RoomsContent>
            </Styled.RoomsContainer>
            <Styled.RoomsContainer>
            <Styled.RoomsTitle>Приклад напівлюкс номерів</Styled.RoomsTitle>
            <Styled.RoomsContent>
                <Styled.Room>
                <Styled.RoomLogo>
                    <img src={SuiteRoomFirst} alt="" />
                </Styled.RoomLogo>
                <Styled.RoomTitle>Напівлюкс-1</Styled.RoomTitle>
                <Styled.RoomContent>
                    1 особа /  односпальне ліжко
                </Styled.RoomContent>
                <Styled.RoomPrice>1400 грн/ніч</Styled.RoomPrice>
                </Styled.Room>
                <Styled.Room>
                <Styled.RoomLogo>
                    <img src={SuiteRoomSecond} alt="" />
                </Styled.RoomLogo>
                <Styled.RoomTitle>Напівлюкс-3</Styled.RoomTitle>
                <Styled.RoomContent>
                    3 особи /1 двоспальне ліжко + 1 односпальне
                </Styled.RoomContent>
                <Styled.RoomPrice>1800 грн/ніч</Styled.RoomPrice>
                </Styled.Room>
                <Styled.Room>
                <Styled.RoomLogo>
                    <img src={SuiteRoomThird} alt="" />
                </Styled.RoomLogo>
                <Styled.RoomTitle>Напівлюкс-5</Styled.RoomTitle>
                <Styled.RoomContent>
                    5 осіб /2 двоспальних ліжка + 1 односпальне
                </Styled.RoomContent>
                <Styled.RoomPrice>2500 грн/ніч</Styled.RoomPrice>
                </Styled.Room>
            </Styled.RoomsContent>
            </Styled.RoomsContainer>
            <Styled.RoomsContainer>
            <Styled.RoomsTitle>Приклад люкс номерів</Styled.RoomsTitle>
            <Styled.RoomsContent>
                <Styled.Room>
                <Styled.RoomLogo>
                    <img src={LuxRoomFirst} alt="" />
                </Styled.RoomLogo>
                <Styled.RoomTitle>Люкс-1</Styled.RoomTitle>
                <Styled.RoomContent>
                    1 особа / master-ліжко
                </Styled.RoomContent>
                <Styled.RoomPrice>1800 грн/ніч</Styled.RoomPrice>
                </Styled.Room>
                <Styled.Room>
                <Styled.RoomLogo>
                    <img src={LuxRoomSecond} alt="" />
                </Styled.RoomLogo>
                <Styled.RoomTitle>Люкс-2</Styled.RoomTitle>
                <Styled.RoomContent>
                    2 особи / master-ліжко
                </Styled.RoomContent>
                <Styled.RoomPrice>2300 грн/ніч</Styled.RoomPrice>
                </Styled.Room>
                <Styled.Room>
                <Styled.RoomLogo>
                    <img src={LuxRoomThird} alt="" />
                </Styled.RoomLogo>
                <Styled.RoomTitle>Люкс-3</Styled.RoomTitle>
                <Styled.RoomContent>
                    3 особи /1 master-ліжко + велике односпальне
                </Styled.RoomContent>
                <Styled.RoomPrice>2600 грн/ніч</Styled.RoomPrice>
                </Styled.Room>
            </Styled.RoomsContent>
            </Styled.RoomsContainer>
        </Styled.RoomsWrapper>
      </Styled.Container>
    </Styled.Wrapper>
  );
};
