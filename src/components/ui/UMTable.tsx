"use client";
import { Table } from "antd";
type UMTableProps = {
  columns: any;
  loading?: boolean;
  dataSource: any;
  pageSize?: number;
  totalPages?: number;
  showSizeChanger?: boolean;
  onPaginationChange?: (page: number, pageSize: number) => void;
  onTableChang?: (pagination: any, filter: any, sorter: any) => void;
  ShowPagination?: boolean;
};

const UMTable = ({
  columns,
  loading = false,
  dataSource,
  pageSize,
  totalPages,
  showSizeChanger,
  onPaginationChange,
  onTableChang,
  ShowPagination = true,
}: UMTableProps) => {
  const paginationConfig = ShowPagination
    ? {
        pageSize: pageSize,
        total: totalPages,
        pageSizeOptions: [5, 10, 20],
        showSizeChanger: showSizeChanger,
        onchange: onPaginationChange,
      }
    : false;

  return (
    <Table
      columns={columns}
      loading={false}
      dataSource={dataSource}
      pagination={paginationConfig}
      onChange={onTableChang}
    />
  );
};

export default UMTable;
