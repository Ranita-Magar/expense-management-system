import React from "react";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";

const Login = () => {
  const SubmitHandler = (values) => {
    console.log(values);
  };
  return (
    <>
      <div className="register-page ">
        <Form layout="vertical" onFinish={SubmitHandler}>
          <h1>Login Form</h1>

          <Form.Item label="Email" name="email">
            <Input type="email" />
          </Form.Item>

          <Form.Item label="Password" name="password">
            <Input type="password" />
          </Form.Item>

          <div className="d-flex flex-column justify-content-between">
            <Link to="/register">Not a user? Click here to register</Link>
            <button className="btn btn-primary mt-4">Login</button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
