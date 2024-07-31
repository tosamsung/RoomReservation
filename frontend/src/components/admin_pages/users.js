import { useEffect, useState } from "react";
import React from 'react';
import { Button, Modal, Checkbox, Form, Input } from 'antd';
import UserService from "../../service/UserService";
function Users() {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState(Object)
    const [index, setIndex] = useState(0)
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [formUser] = Form.useForm();
    useEffect(
        () => {
            getAllUsers()
            console.log(users);
        }
        , [])
    function getAllUsers() {
        UserService.getAllUsers().then(data => setUsers(data.users))
        console.log(UserService.getAllUsers().then(data => data.users))
    }
    function getUserById(id) {
        UserService.getUserById(id).then(data => {
            formUser.setFieldsValue({
                ...data,
            });
        })
    }
    const showModal = (id, i) => {
        setIndex(i)
        getUserById(id)
        setOpen(true);
    };
    const handleOk = () => {
        debugger
        if (formUser.validateFields())
            console.log(formUser.getFieldsValue());
    };
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className="container">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">id</th>
                        <th scope="col">firstname</th>
                        <th scope="col">lastname</th>
                        <th scope="col">username</th>
                        <th scope="col">email</th>
                        <th scope="col">image</th>
                        <th scope="col">phone</th>
                        <th scope="col">birthDate</th>
                        <th scope="col">createDate</th>
                        <th scope="col">customerStatus</th>
                        {/* <th scope="col">haveBusinessAccount</th> */}
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, i) => (
                            <tr>
                                <th scope="row">{i + 1}</th>
                                <td>{user.id}</td>
                                <td>{user.firstname}</td>
                                <td>{user.lastname}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td><img src={user.image} ></img></td>
                                <td>{user.phone}</td>
                                <td>{user.birthDate}</td>
                                <td>{user.createDate}</td>
                                <td>{user.customerStatus}</td>
                                {/* <td>{user.haveBusinessAccount}</td> */}
                                <td> <Button type="primary" onClick={() => showModal(user.id, i)}>Update</Button>
                                    <Modal title="Update User" open={open} cancelButtonProps={{hidden:true}} okButtonProps={{ hidden: true }} onOk={handleOk} confirmLoading={confirmLoading} onCancel={handleCancel}>
                                        <Form
                                            form={formUser}
                                            name="userForm"
                                            layout="vertical"
                                            initialValues={{ remember: true }}
                                            onFinish={onFinish}
                                            onFinishFailed={onFinishFailed}
                                            autoComplete="off"

                                        >
                                            <Form.Item label="ID" name="id">
                                                <Input disabled />
                                            </Form.Item>

                                            <Form.Item
                                                label="First Name"
                                                name="firstname"
                                                rules={[{ required: true, message: 'Please input your first name!' }]}
                                            >
                                                <Input />
                                            </Form.Item>

                                            <Form.Item
                                                label="Last Name"
                                                name="lastname"
                                                rules={[{ required: true, message: 'Please input your last name!' }]}
                                            >
                                                <Input />
                                            </Form.Item>

                                            <Form.Item
                                                label="Username"
                                                name="username"
                                                rules={[{ required: true, message: 'Please input your username!' }]}
                                            >
                                                <Input />
                                            </Form.Item>

                                            <Form.Item
                                                label="Email"
                                                name="email"
                                                rules={[{ required: true, message: 'Please input your email!' }]}
                                            >
                                                <Input />
                                            </Form.Item>

                                            <Form.Item
                                                label="Image"
                                                name="image"
                                                rules={[{ required: true, message: 'Please input your image URL!' }]}
                                            >
                                                <Input />
                                            </Form.Item>

                                            <Form.Item
                                                label="Phone"
                                                name="phone"
                                                rules={[{ required: true, message: 'Please input your phone number!' }]}
                                            >
                                                <Input />
                                            </Form.Item>

                                            <Form.Item
                                                label="Birth Date"
                                                name="birthDate"
                                                rules={[{ required: true, message: 'Please input your birth date!' }]}
                                            >
                                                <Input type="date" />
                                            </Form.Item>

                                            <Form.Item
                                                label="Create Date"
                                                name="createDate"
                                                rules={[{ required: true, message: 'Please input your create date!' }]}
                                            >
                                                <Input type="date" disabled />
                                            </Form.Item>

                                            <Form.Item
                                                label="Customer Status"
                                                name="customerStatus"
                                                rules={[{ required: true, message: 'Please input your customer status!' }]}
                                            >
                                                <Input />
                                            </Form.Item>

                                            <Form.Item
                                                label="Business Account"
                                                name="haveBusinessAccount"
                                                valuePropName="checked"
                                            >
                                                <Checkbox />
                                            </Form.Item>
                                            <br/>
                                            <Button className="mr-2" type="information" htmlType="submit" onClick={() => handleCancel()}>
                                                Cancel
                                            </Button>
                                            <Button type="primary" htmlType="submit">
                                                Submit
                                            </Button>
                                        </Form>
                                    </Modal></td>
                            </tr>
                        ))
                    }


                </tbody>
            </table>
        </div>
    )
}
export default Users;