"use client";

import { Button, Col, Row } from "antd";
import Image from "next/image";
import React from "react";
import loginImage from "@/assest/login-img.svg";
import Form from "@/components/Forms/Form";
import { SubmitHandler } from "react-hook-form";
import FormInput from "@/components/Forms/FormInput";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { getUserInfo, isLoggedIn, storeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";

type FormValues = {
  username: string;
  password: string;
};

const LoginPage = () => {
    console.log(isLoggedIn());
    const [userLogin] = useUserLoginMutation();
    const router = useRouter();
  const onsubmit: SubmitHandler<FormValues> = async(data:any) => {
    try {
      const res = await userLogin({...data}).unwrap();
      console.log(res)
      if(res?.accessToken){ 
        router.push('/profile')
      }

      storeUserInfo({accessToken: res?.accessToken})
      
    } catch (err:any) {
        console.error(err.message);
    }
  };
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}
    >
      <Col sm={12} md={16} lg={10}>
        <Image src={loginImage} width={500} alt="login-image" />
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1
          style={{
            margin: "15px 0",
          }}
        >
          First login your account
        </h1>
        <div>
          <Form submitHandler={onsubmit}>
            <div>
              <FormInput name="username" type="text" size="large" label="Username" />
            </div>
            <div
              style={{
                margin: "15px 0",
              }}
            >
              <FormInput
                name="password"
                type="password"
                size="large"
                label="Password"
              />
            </div>
            <Button type="primary" htmlType="submit" style={{backgroundColor: "#618D2B"}}>
              Login
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;
