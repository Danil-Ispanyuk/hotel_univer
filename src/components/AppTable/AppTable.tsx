import React from "react";
import { Button, Space, Table } from "antd";
import * as Styled from "./style";
import { ITable } from "../../types/table";

export const AppTable = <T1, T2>({
  dataSource,
  tableColumns,
  tableActionConfiguration,
  handleCreateData,
  addButtonText,
  isShowActions = false,
  tableTitle,
  handlePagination = {},
  filtersContent,
  rowClassName,
  onChange
}: ITable<T1, T2>) => {
  const { Column } = Table;

  return (
    <Styled.Container>
      <Styled.Content>
        {isShowActions && (
          <Styled.ActionButtons>
            <Styled.TitleContainer>
              <Styled.Title>{tableTitle || ""}</Styled.Title>
            </Styled.TitleContainer>
            {addButtonText && (
              <Button size="large" onClick={handleCreateData}>
                {addButtonText}
              </Button>
            )}
          </Styled.ActionButtons>
        )}
        {filtersContent}
        <Styled.TableContainer
          pagination={{
            ...handlePagination,
            position: ["bottomCenter"]
          }}
          rowKey={(item) => item.id || item?.title}
          dataSource={dataSource as any}
          rowClassName={rowClassName}
          onChange={onChange}
        >
          {tableColumns.map((column) => {
            const renderContent = column?.render ? { render: column.render } : { ...column };
            
            return (
              <Column
                title={column.title}
                dataIndex={column.dataIndex}
                key={column.key}
                {...renderContent}
              />
            );
          })}
          {tableActionConfiguration ? (
            <Column
              title="Action"
              key="action"
              width={"200px"}
              render={(_: any, render: T2) => (
                <Space size="middle">{tableActionConfiguration(render)}</Space>
              )}
            />
          ) : null}
        </Styled.TableContainer>
      </Styled.Content>
    </Styled.Container>
  );
};
