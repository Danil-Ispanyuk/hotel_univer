import { Select, Table } from "antd";
import { styled } from "styled-components";

export const Container = styled.div `
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ActionButtons = styled.div `
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const TableContainer = styled(Table) `
  width: 100%;
  
  & .deactivate {
    color: #a0a0a078;
    text-decoration: line-through;
  }

  & .declined {
    color: #ccc;
    text-decoration: line-through;
    & .ant-tag{
      text-decoration: line-through;
    }
  }

  & .ant-table-container {
    overflow: hidden;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    & .ant-table-content {
      overflow: scroll;
    }
  }
`;

export const Title = styled.h1 `
  font-size: 27px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primaryDark}
`

export const TitleContainer = styled.div `
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px 0;
`

export const AppSelect = styled(Select) `
  width: 120px;
`

export const Content = styled.div `
  width: 100%;
`;
