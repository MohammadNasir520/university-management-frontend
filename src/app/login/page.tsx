"use client";

import { Button, Col, Row } from "antd";
import Image from "next/image";
import loginImage from "../../assets/login-image.png";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
type FormValues = {
  id: string;
  password: string;
};

const page = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Row
      justify={"center"}
      align={"middle"}
      style={{
        minHeight: "100vh",
      }}
    >
      <Col sm={12} md={16} lg={10}>
        <Image src={loginImage} width={500} alt="login image"></Image>
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1
          style={{
            margin: "15px 0px",
          }}
        >
          First Login your account
        </h1>
        <div>
          <Form submitHandler={onSubmit}>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="id"
                type="text"
                size="large"
                label="user Id"
              ></FormInput>
              <FormInput
                name="password"
                type="password"
                size="large"
                label="user Password"
              ></FormInput>
            </div>

            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default page;
