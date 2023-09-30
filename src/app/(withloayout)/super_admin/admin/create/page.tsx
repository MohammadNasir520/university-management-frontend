"use client";
import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import UploadImage from "@/components/ui/uploadImage";
import {
  DepartmentOptions,
  bloodGroupOptions,
  genderOptions,
} from "@/constants/global";
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
              <Col
                style={{ marginBottom: "10px" }}
                className="gutter-row"
                span={8}
              >
                <FormSelectField
                  name="admin.gender"
                  size="large"
                  options={genderOptions}
                  placeholder={"select Gender"}
                  label="Gender"
                />
              </Col>
              <Col
                style={{ marginBottom: "10px" }}
                className="gutter-row"
                span={8}
              >
                <FormSelectField
                  name="admin.managementDepartment"
                  size="large"
                  options={DepartmentOptions}
                  placeholder={"select Gender"}
                  label="Department"
                />
              </Col>
              <Col
                style={{ marginBottom: "10px" }}
                className="gutter-row"
                span={8}
              >
                <UploadImage></UploadImage>
              </Col>
            </Row>
          </div>

          {/* Basic information.......................................... */}
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "50x",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p style={{ fontSize: "18px", marginBottom: "10px" }}>
              Basic Information
            </p>

            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                style={{ marginBottom: "10px" }}
                className="gutter-row"
                span={8}
              >
                <FormInput
                  type="email"
                  name="admin.name.email"
                  size="large"
                  label="Email"
                />
              </Col>
              <Col
                style={{ marginBottom: "10px" }}
                className="gutter-row"
                span={8}
              >
                <FormInput
                  type="text"
                  name="admin.contactNo"
                  size="large"
                  label="Contact No."
                />
              </Col>
              <Col
                style={{ marginBottom: "10px" }}
                className="gutter-row"
                span={8}
              >
                <FormInput
                  type="text"
                  name="admin.emergencyContactNo"
                  size="large"
                  label="Emergency Contact No."
                />
              </Col>

              <Col
                style={{ marginBottom: "10px" }}
                className="gutter-row"
                span={8}
              >
                <FormDatePicker
                  name="admin.dateOfBirth"
                  label="Date of Birth"
                  size="large"
                />
              </Col>
              <Col
                style={{ marginBottom: "10px" }}
                className="gutter-row"
                span={8}
              >
                <FormSelectField
                  name="admin.bloodGroup"
                  size="large"
                  options={bloodGroupOptions}
                  placeholder={"select Blood Group"}
                  label="Blood Group"
                />
              </Col>
              <Col
                style={{ marginBottom: "10px" }}
                className="gutter-row"
                span={8}
              >
                <FormInput
                  type="text"
                  name="admin.designation"
                  size="large"
                  label="Designation"
                />
              </Col>

              <Col span={12} style={{ margin: "10px 0" }}>
                <FormTextArea
                  name="admin.presentAddress"
                  label="Present address"
                  rows={4}
                />
              </Col>

              <Col span={12} style={{ margin: "10px 0" }}>
                <FormTextArea
                  name="admin.permanentAddress"
                  label="Permanent address"
                  rows={4}
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
