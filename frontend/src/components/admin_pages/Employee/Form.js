import React from "react";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Radio,
  Row,
  Col,
  notification,
  DatePicker,
} from "antd";
import AdminService from "../../../service/AdminService";

const { RangePicker } = DatePicker;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const rolesOptions = [
  { label: "Admin", value: "Admin" },
  { label: "Staff", value: "Staff" },
  // add more roles as needed
];

const App = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const response = await AdminService.create(values);
      notification.success({
        message: "Success",
        description: "Admin created successfully",
      });
    } catch (error) {
      notification.error({
        message: "Error",
        description: "Failed to create admin",
      });
      throw error;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        marginTop: -80,
      }}
    >
      <Form
        {...formItemLayout}
        form={form}
        onFinish={onFinish}
        style={{
          maxWidth: 600,
          width: "100%",
        }}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: "Please input!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Fullname"
              name="fullname"
              rules={[{ required: true, message: "Please input!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Please input!" }]}
            >
              <Input.Password />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Identification"
              name="identificationNumber"
              rules={[{ required: true, message: "Please input!" }]}
            >
              <InputNumber style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Phone"
              name="phone"
              rules={[{ required: true, message: "Please input!" }]}
            >
              <InputNumber style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "The input is not a valid email!" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Salary"
              name="salary"
              rules={[{ required: true, message: "Please input!" }]}
            >
              <InputNumber style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Role"
              name="roles"
              rules={[{ required: true, message: "Please select a role!" }]}
            >
              <Radio.Group>
                {rolesOptions.map((role) => (
                  <Radio key={role.value} value={role.value}>
                    {role.label}
                  </Radio>
                ))}
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default App;
