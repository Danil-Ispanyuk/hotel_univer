import React from "react";
import * as Styled from "./style";

export const Welcome = () => {
  return (
    <Styled.Wrapper id="aboutUs">
      <Styled.Container>
        <Styled.Details>
          <Styled.Subtitle>Вітаємо у</Styled.Subtitle>
          <Styled.TitleContainer>
            <Styled.Line />
            <Styled.Title>Premier Hotel</Styled.Title>
            <Styled.Line />
          </Styled.TitleContainer>
          <Styled.DetailContent>
            <Styled.Text>
              Готель Premier Hotel розташований у центральній частині міста
              Харкова, що пропонує високий стандарт обслуговування та комфорту.
              Інтер'єр номерів вражає стильністю і сучасністю, а великий вибір
              послуг і зручностей, таких як ресторани високої кухні,
              конференц-зали та фітнес-центр, роблять перебування незабутнім.
            </Styled.Text>
            <Styled.Text>
              Завдяки своєму стратегічному розташуванню, готель ідеально
              підходить як для бізнес-подорожей, так і для відпочинку.
            </Styled.Text>
          </Styled.DetailContent>
          <Styled.List>
            <Styled.ListItem>
              <Styled.WifiLogo />
              <Styled.ListItemText>Безкоштовний Wi-Fi</Styled.ListItemText>
            </Styled.ListItem>
            <Styled.ListItem>
              <Styled.MarkerLogo />
              <Styled.ListItemText>Комфортне розташування</Styled.ListItemText>
            </Styled.ListItem>
            <Styled.ListItem>
              <Styled.PianoLogo />
              <Styled.ListItemText>Жива музика ввечері</Styled.ListItemText>
            </Styled.ListItem>
            <Styled.ListItem>
              <Styled.SoftLogo />
              <Styled.ListItemText>Сучасний інтер’єр</Styled.ListItemText>
            </Styled.ListItem>
          </Styled.List>
        </Styled.Details>
      </Styled.Container>
    </Styled.Wrapper>
  );
};
