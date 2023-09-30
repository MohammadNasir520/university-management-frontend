"use client";
import { Col, Row } from "antd";
import FormSelectField from "../Forms/FormSelectField";
import FormInput from "../Forms/FormInput";
import {
  DepartmentOptions,
  acDepartmentOptions,
  acSemesterOptions,
  facultyOptions,
  genderOptions,
} from "@/constants/global";
import UploadImage from "../ui/uploadImage";
import Form from "../Forms/Form";

const StudentInfo = () => {
  return (
    <div>
      <h1>Student Info Form</h1>

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
          <Col style={{ marginBottom: "10px" }} className="gutter-row" span={6}>
            <FormInput
              type="text"
              name="student.name.firstName"
              size="large"
              label="FirstName"
            />
          </Col>
          <Col style={{ marginBottom: "10px" }} className="gutter-row" span={6}>
            <FormInput
              type="text"
              name="student.name.middleName"
              size="large"
              label="Middle Name"
            />
          </Col>
          <Col style={{ marginBottom: "10px" }} className="gutter-row" span={6}>
            <FormInput
              type="text"
              name="student.name.LastName"
              size="large"
              label="Last Name"
            />
          </Col>

          <Col style={{ marginBottom: "10px" }} className="gutter-row" span={6}>
            <FormInput
              type="password"
              name="password"
              size="large"
              label="Password"
            />
          </Col>
          <Col style={{ marginBottom: "10px" }} className="gutter-row" span={6}>
            <FormSelectField
              name="student.academicDepartment"
              size="large"
              options={acDepartmentOptions}
              placeholder={"select Academic Department"}
              label="Academic Department"
            />
          </Col>
          <Col style={{ marginBottom: "10px" }} className="gutter-row" span={6}>
            <FormSelectField
              name="student.academicFaculty"
              size="large"
              options={facultyOptions}
              placeholder={"select Academic Faculty"}
              label="Academic Faculty"
            />
          </Col>
          <Col style={{ marginBottom: "10px" }} className="gutter-row" span={6}>
            <FormSelectField
              name="student.academicSemester"
              size="large"
              options={acSemesterOptions}
              placeholder={"select Academic Semester"}
              label="Academic Semester"
            />
          </Col>
          <Col style={{ marginBottom: "10px" }} className="gutter-row" span={6}>
            <FormSelectField
              name="student.gender"
              size="large"
              options={genderOptions}
              placeholder={"select Gender"}
              label="Gender"
            />
          </Col>
          <Col style={{ marginBottom: "10px" }} className="gutter-row" span={6}>
            <UploadImage></UploadImage>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default StudentInfo;
