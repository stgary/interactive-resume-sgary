import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { Form, Input, Button } from 'antd';

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

  const onFinish = values => {
    console.log(values);
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
      <div className='contact-form'>
        <Form {...layout} name="contact-messages" onFinish={onFinish} validateMessages={validateMessages}>
          <Form.Item
            name={['user', 'name']}
            label="Name"
            rules={[{ required: true, },]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={['user', 'email']}
            label="Email"
            rules={[{ type: 'email', }, { required: true, },]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={['user', 'subject']}
            label="Subject"
            rules={[{ required: true, },]}
          >
            <Input />
          </Form.Item>
          <Form.Item 
            name={['user', 'message']} 
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