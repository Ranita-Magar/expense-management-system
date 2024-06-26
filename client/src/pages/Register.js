import React, { useState, useEffect } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";

const Register = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const SubmitHandler = async (values) => {
    try {
      setLoading(true);
      await axios.post("/api/v1/users/register", values);
      message.success("Registeration successful");
      setLoading(false);
      navigate("/login");
    } catch (error) {
      setLoading(false);
      message.error("Something went wrong");
    }
  };

  // prevent for login user
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      <div className="register-page ">
        {loading && <Spinner />}
        <Form layout="vertical" onFinish={SubmitHandler}>
          <h1>Register Form</h1>
          <Form.Item label="Name" name="name" required>
            <Input />
          </Form.Item>

          <Form.Item label="Email" name="email" required>
            <Input type="email" />
          </Form.Item>

          <Form.Item label="Password" name="password" required>
            <Input type="password" />
          </Form.Item>

          <div className="d-flex flex-column justify-content-between">
            <Link to="/login">Already Registered? Click here to login</Link>
            <button className="btn btn-primary mt-4">Register</button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Register;
