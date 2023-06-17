import React from 'react';
import { Form, Input, message } from 'antd';
import axios from 'axios';
import { Link, useNavigate} from 'react-router-dom';
import '../styles/RegisterStyles.css';

function Register() {
  const navigate = useNavigate();

  // form handler
  const onFinishHandler = async (values) => {
    try {
      const res = await axios.post('/api/v1/user/register', values); // add the backend API endpoint URL
      if (res.data.success) {
        message.success('Register Successfully! ');
        navigate('/login');
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error('Something Went Wrong');
    }
  };

  return (
    <>
      <div className='form-container'>
        <Form layout='vertical' onFinish={onFinishHandler} className='register-form'>
          <h3 className='text-center'>Register Form</h3>

          <Form.Item label='Name' name='name'>
            <Input type='text' required/>
          </Form.Item>

          <Form.Item label='Email' name='email'>
            <Input type='email' required/>
          </Form.Item>

          <Form.Item label='Password' name='password'>
            <Input type='password' required/>
          </Form.Item>

          <Link to='/login' className='m-2'>
            Already user login here
          </Link>

          <button className='btn btn-primary' type='submit'>
            Register
          </button>
        </Form>
      </div>
    </>
  );
}

export default Register;