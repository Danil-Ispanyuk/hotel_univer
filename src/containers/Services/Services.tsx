import React from "react";
import * as Styled from "./style";

export const Services = () => {
  return (
    <Styled.Wrapper id="services">
      <Styled.Container>
        <Styled.TitleContainer>
          <Styled.SubTitle>На ваш вибір</Styled.SubTitle>
          <Styled.Title>Послуги готелю</Styled.Title>
        </Styled.TitleContainer>
        <Styled.List>
          <Styled.Item>
            <Styled.ItemLogo>
              <Styled.ItemSpaLogo />
            </Styled.ItemLogo>
            <Styled.ItemTitle>Спа-центр</Styled.ItemTitle>
            <Styled.ItemContent>
              Надає розкішні процедури для релаксації та відновлення енергії,
              включаючи масажі, сауни та інші спа-послуги
            </Styled.ItemContent>
          </Styled.Item>
          <Styled.Item>
            <Styled.ItemLogo>
              <Styled.ItemBusinessLogo />
            </Styled.ItemLogo>
            <Styled.ItemTitle>Бізнес-центр</Styled.ItemTitle>
            <Styled.ItemContent>
              Забезпечує високотехнологічні конференц-зали та послуги для
              успішних бізнес-зустрічей та подій
            </Styled.ItemContent>
          </Styled.Item>
          <Styled.Item>
            <Styled.ItemLogo>
              <Styled.ItemSwimmingLogo />
            </Styled.ItemLogo>
            <Styled.ItemTitle>Басейн та фітнес</Styled.ItemTitle>
            <Styled.ItemContent>
              Забезпечує можливості для занять спортом та активного відпочинку,
              включаючи басейни та сучасні тренажерні зали
            </Styled.ItemContent>
          </Styled.Item>
          <Styled.Item>
            <Styled.ItemLogo>
              <Styled.ItemConciergeLogo />
            </Styled.ItemLogo>
            <Styled.ItemTitle>Консьєрж-послуги</Styled.ItemTitle>
            <Styled.ItemContent>
              Професійний консьєрж готовий вам завжди допомогти з організацією
              трансферів, екскурсій та інших запитань
            </Styled.ItemContent>
          </Styled.Item>
          <Styled.Item>
            <Styled.ItemLogo>
              <Styled.ItemLaundryLogo />
            </Styled.ItemLogo>
            <Styled.ItemTitle>Пральня та хімчистка</Styled.ItemTitle>
            <Styled.ItemContent>
              Забезпечує послуги прання та хімчистки для збереження свіжості і
              чистоти вашого одягу
            </Styled.ItemContent>
          </Styled.Item>
          <Styled.Item>
            <Styled.ItemLogo>
              <Styled.ItemParkingLogo />
            </Styled.ItemLogo>
            <Styled.ItemTitle>Паркінг</Styled.ItemTitle>
            <Styled.ItemContent>
              Зручне розташування для автомобілів гостей, а також доступ до
              послуг автосервісу для додаткової зручності
            </Styled.ItemContent>
          </Styled.Item>
          <Styled.Item>
            <Styled.ItemLogo>
              <Styled.ItemKitchenLogo />
            </Styled.ItemLogo>
            <Styled.ItemTitle>Ресторан високої кухні</Styled.ItemTitle>
            <Styled.ItemContent>
              Широкий вибір гастрономічних закладів, де гості можуть
              насолоджуватися вишуканими стравами та напоями
            </Styled.ItemContent>
          </Styled.Item>
          <Styled.Item>
            <Styled.ItemLogo>
              <Styled.ItemCleaningLogo />
            </Styled.ItemLogo>
            <Styled.ItemTitle>Обслуговування номерів</Styled.ItemTitle>
            <Styled.ItemContent>
              Незалежно від часу доби, гості можуть замовити обслуговування
              номерів, щоб отримати додаткові зручності або послуги
              безпосередньо у своєму номері
            </Styled.ItemContent>
          </Styled.Item>
        </Styled.List>
      </Styled.Container>
    </Styled.Wrapper>
  );
};
