"use client";
import UMTable from "@/components/ui/UMTable";
import {
  useDeleteDepartmentMutation,
  useDepartmentsQuery,
} from "@/redux/api/departmentApi";
import { Button, Input, message } from "antd";
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
import dayjs from "dayjs";

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
  // console.log(data);
  // @ts-ignore
  const departments = data?.departments;
  const meta = data?.meta;
  const [deleteDepartment] = useDeleteDepartmentMutation();

  const deleteHandler = async (id: string) => {
    message.loading("deleteing.....");
    try {
      await deleteDepartment({ id });
      console.log(data);

      message.success("department deleted success fully");
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };
  // console.log(departments, meta);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },

      sorter: true,
      // sorter: (a: any, b: any) => a.age - b.age,
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <>
            {/* <Button onClick={() => console.log(data)} type="primary">
              <EyeOutlined />
            </Button> */}
            <Button
              style={{ margin: "0px 5px" }}
              onClick={() => deleteDepartment(data?.id)}
              type="primary"
              danger
            >
              <DeleteOutlined />
            </Button>
            <Link href={`/super_admin/department/edit/${data.id}`}>
              <Button onClick={() => console.log(data)} type="primary">
                <EditOutlined />
              </Button>
            </Link>
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
