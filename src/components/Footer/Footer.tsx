import React from "react";
import * as Styled from "./style";

export const Footer = () => {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.FooterContainer>
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
          <Styled.FooterCompanyName>by <br />
             Arteon Team</Styled.FooterCompanyName>
        </Styled.FooterContainer>
      </Styled.Container>
    </Styled.Wrapper>
  );
};
