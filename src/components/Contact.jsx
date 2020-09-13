import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Form, Input, Button } from 'antd';
import axios from 'axios';

const layout = {
  labelCol: { span: 8, },
  wrapperCol: { span: 16, },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
  },
};

const Contact = () => {
  const [form] = Form.useForm();

  const onFinish = values => {
    axios
      .post('https://resume-bkend.herokuapp.com/send', values)
      .then(res => {
        alert('Your message has been sent! Heroku puts this app in idle, sorry if this message was delayed.');
      })
      .catch(err => {
        alert('There was an error sending your message. Please try contacting me be phone or email.')
      });
    form.resetFields();
  };

  return (
    <div className='contact-container'>
      <div className='contact-banner'>
        <FontAwesomeIcon className='contact-icon' icon={faPaperPlane} />
        <span className='contact-title'>Contact</span>
      </div>
      <div className='git'>
        <span className='gitwm'>Get in touch with me!</span>
      </div>
      <div className='divider'>
          <hr className='line-break' /><FontAwesomeIcon className='down-arrow-icon' icon={faChevronDown} /><hr className='line-break' />
      </div>
      <div className='contact-form'>
        <Form {...layout} form={form} name="contact-messages" onFinish={onFinish} validateMessages={validateMessages}>
          <Form.Item
            name={['name']}
            label="Name"
            rules={[{ required: true, },]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={['email']}
            label="Email"
            rules={[{ type: 'email', }, { required: true, },]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={['subject']}
            label="Subject"
            rules={[{ required: true, },]}
          >
            <Input />
          </Form.Item>
          <Form.Item 
            name={['message']} 
            label="Message"
            rules={[{ required: true, },]}
            >
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Contact;