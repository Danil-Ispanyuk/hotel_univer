import styled from "styled-components";
import {ReactComponent as AppLogo} from '../../assets/svg/full_logo_black.svg';
import { DatePicker } from "antd";

const { RangePicker } = DatePicker;

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
  padding: 36px 45px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
    width: 100%;
`;

export const Logo = styled(AppLogo) `
    width: 125px;
    height: 55px;
    object-fit: contain;
`

export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
export const Title = styled.h1`
    max-width: 400px;
    width: 100%;
    font-size: 30px;
    font-family: "Literata", serif;
    color: ${({ theme }) => theme.colors.primary};
`;
export const DateRange = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;
export const Content = styled.div`
    margin-top: 25px;
`;

export const FormField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 40px;
`;
export const FormLabel = styled.label`
  font-size: 18px;
  font-weight: 700;
`;

export const AppRangePicker = styled(RangePicker)`
  height: 46px;
  border-color: #00000040;
`;

export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const SummaryContent = styled.div `
  font-size: 20px;
  font-weight: bold;
`;

export const SummaryCount = styled.span`
  font-weight: 400;
  margin-left: 30px;
`
