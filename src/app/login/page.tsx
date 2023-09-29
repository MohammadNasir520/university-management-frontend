"use client";

import { Button, Col, Row } from "antd";
import Image from "next/image";
import loginImage from "../../assets/login-image.png";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.service";
type FormValues = {
  id: string;
  password: string;
};

const LoginPage = () => {
  const [userLogin] = useUserLoginMutation();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const res = await userLogin({ ...data }).unwrap();
      storeUserInfo({ accessToken: res?.data?.accessToken });

      console.log(res);
    } catch (error: any) {
      console.error(error.message);
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

export default LoginPage;
