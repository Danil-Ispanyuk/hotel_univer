import { Button, Checkbox, Col, DatePicker, Input, Select } from "antd";
import styled from "styled-components";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

export const Wrapper = styled.div`
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin-top: 162px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.form`
  border: ${({ theme }) => `2px solid ${theme.colors.primary}`};
  padding: 44px 52px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Alegreya Sans", sans-serif;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 30px;
  font-family: "Literata", serif;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Line = styled.p`
  margin: 20px 0;
  padding: 0;
  max-width: 572px;
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Subtitle = styled.p`
  margin: 0;
  font-size: 20px;
  margin-bottom: 30px;
`;

export const FormField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 40px;
  position: relative;
`;

export const FormSection = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
`;

export const AppInput = styled(Input)`
  border: 2px solid #00000040;
  padding: 11px 0;
  width: 380px;
  text-align: center;
`;

export const AppCheckbox = styled(Checkbox)`
  font-size: 18px;
  font-weight: bold;
`;

export const ErrorContainer = styled.div `
  height: 82px;
  max-width: 630px;
  width: 100%;
  font-size: 20px;
  background-color: ${({ theme }) => theme.colors.error};
  font-family: "Alegreya Sans", sans-serif;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`

export const CheckboxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 40px;
  position: relative;
`;

export const AppRangePicker = styled(RangePicker)`
  height: 46px;
  border-color: #00000040;
`;

export const AppCheckboxCol = styled(Col)`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 43px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  padding: 20px 0;
  & .ant-checkbox-inner {
    border-radius: 50%;
    width: 22px;
    height: 22px;
  }
  & .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #000 !important;
    border-color: #000 !important;
    &::after {
      opacity: 0;
    }
  }
`;

export const AppSelect = styled(Select)`
  width: 100%;
  max-width: 380px;
  min-height: 46px;
  border-color: #00000040;
`;

export const FormLabel = styled.label`
  font-size: 18px;
  font-weight: 700;
`;

export const AppTextArea = styled(TextArea)`
  width: 100%;
  border: 2px solid #00000040;
  min-height: 150px !important;
`;

export const FormDetailsContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  gap: 20px;
`;

export const FormDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 250px;
`;

export const FormBtnSubmit = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const SummaryTextContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  align-items: center;
  margin-bottom: 15px;
`;

export const SummaryText = styled.div`
  font-weight: 700;
  font-size: 18px;
`;

export const SubmitButton = styled(Button)`
  max-width: 200px;
  width: 100%;
  height: 50px;
  font-size: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  &:hover {
    color: ${({ theme }) => theme.colors.primary} !important;
    border-color: ${({ theme }) => theme.colors.primary} !important;
  }
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.error};
  position: absolute;
  left: 0;
  bottom: -25px;
  font-size: 16px;
`;
