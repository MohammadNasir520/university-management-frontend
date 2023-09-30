"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { Button, Col, Row } from "antd";

const CreateAdminPage = () => {
  const onSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (error: any) {
      console.error(error.message);
    }
  };
  return (
    <div>
      <h1>Create Admin page</h1>

      <div>
        <Form submitHandler={onSubmit}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "50x",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p style={{ fontSize: "18px", marginBottom: "10px" }}>
              Admin Information
            </p>

            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                style={{ marginBottom: "10px" }}
                className="gutter-row"
                span={8}
              >
                <FormInput
                  type="text"
                  name="admin.name.firstName"
                  size="large"
                  label="FirstName"
                />
              </Col>
              <Col
                style={{ marginBottom: "10px" }}
                className="gutter-row"
                span={8}
              >
                <FormInput
                  type="text"
                  name="admin.name.middleName"
                  size="large"
                  label="Middle Name"
                />
              </Col>
              <Col
                style={{ marginBottom: "10px" }}
                className="gutter-row"
                span={8}
              >
                <FormInput
                  type="text"
                  name="admin.name.LastName"
                  size="large"
                  label="Last Name"
                />
              </Col>

              <Col
                style={{ marginBottom: "10px" }}
                className="gutter-row"
                span={8}
              >
                <FormInput
                  type="password"
                  name="password"
                  size="large"
                  label="Password"
                />
              </Col>
            </Row>
          </div>

          <Button htmlType="submit" type="primary">
            Create
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateAdminPage;
