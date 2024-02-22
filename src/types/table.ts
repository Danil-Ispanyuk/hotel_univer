import { ReactNode } from "react";
import { TableProps } from "antd";

export interface ITableColumns<T> {
  title: string;
  dataIndex: string | string[] | any;
  key: string;
  render?: (_: any, render: T) => ReactNode | undefined;
}

type OnChange = NonNullable<TableProps<any>['onChange']>;

export interface ITable<T1, T2> {
  dataSource: T1[];
  tableColumns: ITableColumns<T2>[];
  tableActionConfiguration?: (render: T2) => ReactNode;
  isShowActions?: boolean;
  handleCreateData?: () => void;
  addButtonText?: string;
  tableTitle?: string;
  onChange?: OnChange,
  filtersContent?: ReactNode;
  isStatusType?: boolean,
  rowClassName?: ((record: T1) => string) | undefined;
  handlePagination?:
    | {
        total: number;
        onChange: (page: number, perPage: number) => void;
      }
    | {};
}
