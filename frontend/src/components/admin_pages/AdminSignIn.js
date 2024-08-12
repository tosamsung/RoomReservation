import React from "react";
import { Form, Input, Button, Modal } from "antd";
import AdminAuthService from "../../service/AdminAuthService";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../../context/AdminContext";
import { useContext } from "react";

function AdminSignin() {
  const [form] = Form.useForm();
  const {setAdmin} = useContext(AdminContext);

  const navigate = useNavigate();

  const handleSignin = async (values) => {
    try {
      const response = await AdminAuthService.signin(values);
      setAdmin(response)
      navigate("/admin");
    } catch (error) {
      Modal.error({
        title: "Signin Failed",
        content: "Invalid username or password. Please try again.",
      });
    }
  };

  return (
    <>
      <div className="bg-blue">
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/AdminLogin/util.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/AdminLogin/main.css"
        />
        <div className="container py-2">
          <div className="limiter">
            <div className="container-login100 cs-rounded overflow-hidden">
              <div className="wrap-login100">
                <Form
                  form={form}
                  name="adminLogin"
                  layout="vertical"
                  initialValues={{ remember: true }}
                  onFinish={handleSignin}
                  autoComplete="off"
                  className="login100-form validate-form"
                >
                  <h2 className="p-b-43 f-robo text-center fw-bolder">
                    Login into admin
                  </h2>
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input placeholder="Username" />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password placeholder="Password" />
                  </Form.Item>
                  <Form.Item>
                    <div className="flex-sb-m w-full p-t-3 p-b-32">
                      <div>
                        <a href="#" className="txt1">
                          Forgot Password?
                        </a>
                      </div>
                    </div>
                    <Button type="primary" htmlType="submit" block>
                      Submit
                    </Button>
                    <div className="text-center p-t-46 p-b-20">
                  <span className="txt2">or sign up using</span>
                </div>
                <div className="login100-form-social flex-c-m">
                  <a
                    href="#"
                    className="login100-form-social-item flex-c-m bg1 m-r-5"
                  >
                    <i className="fa fa-facebook-f" aria-hidden="true" />
                  </a>
                  <a
                    href="#"
                    className="login100-form-social-item flex-c-m bg2 m-r-5"
                  >
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </a>
                </div>
                  </Form.Item>
                </Form>

                {/* <div className="container-login100-form-btn">
                  <Button
                    type="default"
                    htmlType="button"
                    block
                    onClick={() => form.submit()}
                  >
                    Login
                  </Button>
                </div> */}

                <div
                  className="login100-more"
                  style={{ backgroundImage: 'url("/images/admin/bg-01.jpg")' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminSignin;
