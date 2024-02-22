import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 882px;
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
`;

export const AdvantageList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const AdvantageItem = styled.div`
  height: 308px;
  display: flex;
  width: 100%;
`;
export const AdvantagePhoto = styled.div`
  width: 50%;
`;
export const AdvantageContent = styled.div<{
  isDark?: boolean;
}>`
  font-family: "Alegreya Sans", sans-serif;
  width: 50%;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ isDark, theme }) => isDark ? theme.colors.primary : "inherit"};
  color: ${({ isDark }) => isDark ? "#fff" : "inherit"};
  ${
    ({ isDark }) => isDark && (`
        h1 {
            color: #fff;
        }
    `)
  }
`;
export const AdvantageItemTitle = styled.h1`
  margin: 0;
  font-size: 30px;
  margin-bottom: 26px;
  max-width: 440px;
  color: ${({ theme }) => theme.colors.primary};
`;
export const AdvantageItemContent = styled.p`
  margin: 0;
  font-size: 20px;
  text-align: center;
  max-width: 540px;
`;
