import React from "react";
import * as Styled from "./style";
import { Header } from "../../components";

export const Introduction = () => {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Header />
        <Styled.Content>
          <Styled.TitleContainer>
            <Styled.Title>Premier</Styled.Title>
            <Styled.Subtitle>PALACE HOTEL KHARKIV</Styled.Subtitle>
          </Styled.TitleContainer>
          <Styled.Details>
            <Styled.DetailItemContainer>
              <Styled.DetailItemTitle>20</Styled.DetailItemTitle>
              <Styled.DetailItemDescription>
                років у сфері
              </Styled.DetailItemDescription>
            </Styled.DetailItemContainer>
            <Styled.DetailItemContainer>
              <Styled.DetailItemTitle>500+</Styled.DetailItemTitle>
              <Styled.DetailItemDescription>
                постійних гостей
              </Styled.DetailItemDescription>
            </Styled.DetailItemContainer>
            <Styled.DetailItemContainer>
              <Styled.DetailItemTitle>4,9/5</Styled.DetailItemTitle>
              <Styled.DetailItemDescription>
                середня оцінка
              </Styled.DetailItemDescription>
            </Styled.DetailItemContainer>
          </Styled.Details>
          <Styled.MoveDownContainer href="#form">
            <Styled.IconDown />
          </Styled.MoveDownContainer>
        </Styled.Content>
      </Styled.Container>
    </Styled.Wrapper>
  );
};
