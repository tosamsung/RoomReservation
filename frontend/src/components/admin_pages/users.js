import { useEffect, useState } from "react";
import React from 'react';
import { Button, Modal, Checkbox, Form, Input, Select, Pagination, Popconfirm } from 'antd';
import UserService from "../../service/UserService";
import { toast } from "react-toastify";
import { useNavigate, useSearchParams } from "react-router-dom";
function Users() {
    const [users, setUsers] = useState([])
    const [userId, setUserId] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    const [index, setIndex] = useState(0)
    const [page, setPage] = useState(0)
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [openCreate, setOpenCreate] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [formUser] = Form.useForm();
    useEffect(
        () => {
            getAllUsers(page)
            console.log(users);
        }
        , [])
    useEffect(() => {
        setSearchParams({ page });
        // OR: navigate(`?page=${page}`, { replace: true }); // If you prefer to replace instead of push
    }, [page, setSearchParams, navigate]);
    function getAllUsers(page) {
        UserService.getAllUsers(page).then(data => {
            setUsers(data.users)
            setTotalPages(data.totalPages)
            console.log(data.totalPages);
        })
    }
    function onPageChange(page) {
        setPage(page)
        getAllUsers(page)
        scrollToTop()
    }
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    function getUserById(id) {
        UserService.getUserById(id).then(data => {
            formUser.setFieldsValue({
                ...data,
                createDate: new Date(data.createDate).toISOString().split('T')[0],
                birthDate: new Date(data.birthDate).toISOString().split('T')[0]
            });
        })
    }
    const showModal = (id, i) => {
        setIndex(i)
        getUserById(id)
        setOpen(true);
    };
    const showModalCreate = () => {
        setOpenCreate(true);
    };
    const showModalDelete = (id) => {
        setOpenDelete(true);
        setUserId(id)
    };
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
        setOpenCreate(false);
        setOpenDelete(false)
    };
    const onFinish = (id) => {
        if (formUser.validateFields())
            console.log(formUser.getFieldsValue());
        UserService.updateUser(id, formUser.getFieldsValue())
            .then(data => {
                setOpen(false)
                toast.success('Update success')
            }
            )
            .catch(error => {
                toast.error('Update failed ' + error.error)
                console.log(error);
            })
    };
    const onFinishCreate = (values) => {
        UserService.createUser(values)
            .then(data => {
                setOpenCreate(false)
                toast.success('Create success')
            }
            )
            .catch(error => {
                toast.error('Create failed ' + error)
                console.log(error);
            })

    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const deleteUser = () => {
        console.log("ok");
        debugger
        UserService.deleteUser(userId)
            .then(data => {
                toast.success('Create success')
                setOpenDelete(false)

            }
            )
            .catch(error => {
                toast.error('Create failed ' + error)
                console.log(error);
            })
    };
    const confirm = () => {
        console.log("error");
    };
    return (
        <>
            <button className="btn btn-success m-3" onClick={() => showModalCreate()}>Create</button>
            <Modal title="Update User" open={openCreate} cancelButtonProps={{ hidden: true }} okButtonProps={{ hidden: true }} confirmLoading={confirmLoading} onCancel={handleCancel}>
                <Form
                    name="userCreateForm"
                    layout="vertical"
                    initialValues={{ remember: true }}
                    onFinish={onFinishCreate}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"

                >
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
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
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
                        label="Customer Status"
                        name="customerStatus"
                        rules={[{ required: true, message: 'Please input your customer status!' }]}
                    >
                        <Select>
                            <Select.Option value="ACTIVE" >ACTIVE</Select.Option>
                            <Select.Option value="DELETED">DELETED</Select.Option>
                            <Select.Option value="BANNED">BANNED</Select.Option>
                            <Select.Option value="LOCKED">LOCKED</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Business Account"
                        name="haveBusinessAccount"
                        valuePropName="checked"
                    >
                        <Checkbox />
                    </Form.Item>
                    <br />
                    <Button className="mr-2" onClick={() => handleCancel()}>
                        Cancel
                    </Button>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form>
            </Modal>
            <table class="table table-hover">
                <thead>
                    <tr>
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
                                <td>{user.id}</td>
                                <td>{user.firstname}</td>
                                <td>{user.lastname}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td><img src={user.image} ></img></td>
                                <td>{user.phone}</td>
                                <td>{new Date(user.birthDate).toISOString().split('T')[0]}</td>
                                <td>{new Date(user.createDate).toISOString().split('T')[0]}</td>
                                <td>{user.customerStatus}</td>
                                {/* <td>{user.haveBusinessAccount}</td> */}
                                <td> <Button type="primary" onClick={() => showModal(user.id, i)} >Update</Button>
                                    <Button type="primary" onClick={() => showModalDelete(user.id)} danger>
                                        Delete
                                    </Button>
                                    <Modal title="Delete User" open={openDelete} cancelButtonProps={{ hidden: true }} okButtonProps={{ hidden: true }} onCancel={handleCancel}>
                                        <p>Are you sure to delete this user with id: {userId}</p>
                                        <br />
                                        <Button className="mr-2" onClick={() => handleCancel()}>
                                            Cancel
                                        </Button>
                                        <Button type="primary" onClick={() => deleteUser()}>
                                            Delete
                                        </Button>
                                    </Modal>
                                    <Modal title="Update User" open={open} cancelButtonProps={{ hidden: true }} okButtonProps={{ hidden: true }} confirmLoading={confirmLoading} onCancel={handleCancel}>
                                        <Form
                                            form={formUser}
                                            name="userForm"
                                            layout="vertical"
                                            initialValues={{ remember: true }}
                                            onFinish={() => onFinish(formUser.getFieldValue('id'))}
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
                                                <Select>
                                                    <Select.Option value="ACTIVE">ACTIVE</Select.Option>
                                                    <Select.Option value="DELETED">DELETED</Select.Option>
                                                    <Select.Option value="BANNED">BANNED</Select.Option>
                                                    <Select.Option value="LOCKED">LOCKED</Select.Option>
                                                </Select>
                                            </Form.Item>

                                            <Form.Item
                                                label="Business Account"
                                                name="haveBusinessAccount"
                                                valuePropName="checked"
                                            >
                                                <Checkbox />
                                            </Form.Item>
                                            <br />
                                            <Button className="mr-2" onClick={() => handleCancel()}>
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
            <Pagination className="d-flex justify-content-center"
                defaultCurrent={0}
                current={page}
                total={(totalPages) * 10}
                onChange={(value) => onPageChange(value)}

            />
        </>
    )
}
export default Users;