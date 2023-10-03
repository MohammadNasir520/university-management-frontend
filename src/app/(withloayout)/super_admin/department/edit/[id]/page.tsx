"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import {
  useDepartmentQuery,
  useUpdateDepartmentMutation,
} from "@/redux/api/departmentApi";
import { Button, Col, Row, message } from "antd";

type IDProps = {
  params: any;
};
const EditDepartmentPage = ({ params }: IDProps) => {
  const { id } = params;

  const { data, isLoading } = useDepartmentQuery(id);
  const [updateDepartment] = useUpdateDepartmentMutation();

  // console.log(data);

  const onSubmit = async (values: { title: string }) => {
    message.loading("updating.....");
    try {
      await updateDepartment({ id, body: values });
      console.log(data);

      message.success("department updated success fully");
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };

  const defaultValues = {
    title: data?.title || "",
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
      <h1>Create Department</h1>
      <ActionBar title="update Department">
        <Form submitHandler={onSubmit} defaultValues={defaultValues}>
          <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
            <Col span={8} style={{ margin: "10px 0 " }}>
              <FormInput name="title" label="Title" />
            </Col>
          </Row>
          <Button type="primary" htmlType="submit">
            update
          </Button>
        </Form>
      </ActionBar>
    </div>
  );
};

export default EditDepartmentPage;
