import React from "react";
import * as Styled from "./style";

export const Header = () => {
  return (
    <Styled.Container>
      <Styled.Logo />
      <Styled.Navigation>
          <li>
            <a href="#aboutUs">Про готель</a>
          </li>
          <li>
            <a href="#advantages">Переваги</a>
          </li>
          <li>
            <a href="#services">Послуги</a>
          </li>
          <li>
            <a href="#rooms">Номери</a>
          </li>
      </Styled.Navigation>
      <Styled.ReserveButton href="#form">
        Забронювати
      </Styled.ReserveButton>
    </Styled.Container>
  );
};
