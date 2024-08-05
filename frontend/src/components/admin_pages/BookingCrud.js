import React, { useEffect, useState } from 'react';
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
} from 'antd';
import dayjs from 'dayjs';
import BookingService from '../../service/BookingSerivce';
import TableUtils from '../util_component/TableUtil';
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};

const BookingCrud = () => {
  // const [rangeDate, setRangeDate] = useState([])
  const [bookingStatus, setBookingStatus] = useState([]);
  const [bookingList, setBookingList] = useState([]);
  const [form] = Form.useForm();
  useEffect(() => {
    fetchBookingStatus()
    fetchBookingList()
  }, [])
  const onFinish = (values) => {
    const range = values.RangePicker;
    const checkin = range?.[0];
    const checkout = range?.[1];
    delete values.RangePicker;
    if (values.id) {
      BookingService.update(values.id, { ...values, checkin, checkout }).then((d) => {
        console.log("update success"); fetchBookingList();
        form.resetFields();
      }).catch((e) => {
        console.log(e);
      })
    } else {
      BookingService.create({ ...values, checkin, checkout }).then((d) => {
        console.log("create success"); fetchBookingList();
        form.resetFields();
      }).catch((e) => { console.log(e); })
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const fetchBookingStatus = () => {
    BookingService.getBookingStatus().then((data) => { console.log(data); setBookingStatus(data); });
  }
  const fetchBookingList = () => {
    BookingService.getBookingList().then((data) => { console.log(data); setBookingList(data); });
  }
  const handleEditClick = (d) => {
    const a = [dayjs(new Date(d.checkin).toISOString().split('T')[0], dateFormat), dayjs(new Date(d.checkout).toISOString().split('T')[0], dateFormat)];
    // setRangeDate(a);
    form.setFieldsValue({ ...d, RangePicker: a });
  }
  const handleDeleteClick = (d) => {
    BookingService.deleteBooking(d.id).then((data) => { console.log(data); fetchBookingList(); })
  }
  return (
    <>
      <Form
        {...formItemLayout}
        variant="filled"
        style={{
          maxWidth: 600,
        }}
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item hidden name={"id"} label={"id"}>
          <Input/>
        </Form.Item>
        <Form.Item
          label="Properties"
          name="propertyId"
          rules={[
            {
              required: true,
              message: 'Please input!',
            },
          ]}
        >
          <InputNumber style={{
            width: '100%',
          }} />
        </Form.Item>
        <Form.Item
          label="Number of guest"
          name="numberOfGuest"
          rules={[
            {
              required: true,
              message: 'Please input!',
            },
          ]}
        >
          <InputNumber style={{
            width: '100%',
          }} />
        </Form.Item>
        <Form.Item
          label="Number of Infant"
          name="numberOfInfant"
          rules={[
            {
              required: true,
              message: 'Please input!',
            },
          ]}
        >
          <InputNumber
            style={{
              width: '100%',
            }}
          />
        </Form.Item>
        <Form.Item
          label="Booking status"
          name="bookingStatus"
          rules={[
            {
              required: true,
              message: 'Please input!',
            },
          ]}
        >
          {/* <Select options={bookingStatus.map(bookingStatu => ({ value: bookingStatu, label: <span>{bookingStatu}</span> }))} /> */}
          <Select options={[...bookingStatus.map((bookingStatu) => ({ value: bookingStatu, label: <span>{bookingStatu}</span> }))]} />
        </Form.Item>

        <Form.Item
          label="RangePicker"
          name="RangePicker"
          rules={[
            {
              required: true,
              message: 'Please input!',
            },
          ]}
        >
          <RangePicker
            // defaultValue={rangeDate}
            format={dateFormat} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 6,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <TableUtils array={bookingList} handleDeleteClick={handleDeleteClick} handleEditClick={handleEditClick} />
    </>
  );
}
export default BookingCrud;