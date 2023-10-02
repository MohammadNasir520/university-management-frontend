"use client";
import UMTable from "@/components/ui/UMTable";
import { useDepartmentsQuery } from "@/redux/api/departmentApi";
import { Button, Input } from "antd";
import Link from "next/link";
import { useState } from "react";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { useDebounced } from "@/redux/hooks";

const DepartmentPage = () => {
  const query: Record<string, any> = {};

  const [size, setSize] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  // query["searchTerm"] = searchTerm;

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (debouncedTerm) {
    query["searchTerm"] = searchTerm;
  }

  const { data, isLoading } = useDepartmentsQuery({ ...query });
  console.log(data);
  // @ts-ignore
  const departments = data?.departments;
  const meta = data?.meta;
  // const { departments, meta } = data;
  console.log(departments, meta);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",

      sorter: true,
      // sorter: (a: any, b: any) => a.age - b.age,
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <>
            <Button onClick={() => console.log(data)} type="primary">
              <EyeOutlined />
            </Button>
            <Button
              style={{ margin: "0px 5px" }}
              onClick={() => console.log(data)}
              type="primary"
            >
              <DeleteOutlined />
            </Button>
            <Button onClick={() => console.log(data)} type="primary" danger>
              <EditOutlined />
            </Button>
          </>
        );
      },
    },
  ];
  const tableData = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    console.log("page:", page, "pageSize:", pageSize);
    setPage(page);
    setSize(pageSize);
  };

  const onTableChang = (pagination: any, filter: any, sorter: any) => {
    // console.log(order, field);
    const { order, field } = sorter;
    setSortBy(field);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };
  const base = "super_admin";

  return (
    <div>
      <UMBreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "department", link: `/${base}/department` },
        ]}
      />
      <ActionBar title="Department List">
        <Input
          style={{ width: "20%" }}
          type="text"
          size="large"
          placeholder="Search Department"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />

        <div>
          <Link href={"/super_admin/department/create"}>
            <Button type="primary">Create </Button>
          </Link>
          {(!!sortBy || !!sortOrder || !!searchTerm) && (
            <Button
              onClick={resetFilters}
              style={{ margin: "0px 5px" }}
              type="primary"
            >
              <ReloadOutlined />
            </Button>
          )}
        </div>
      </ActionBar>
      <UMTable
        columns={columns}
        loading={isLoading}
        dataSource={departments}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChang={onTableChang}
        ShowPagination={true}
      />
    </div>
  );
};

export default DepartmentPage;
