/* eslint-disable */
import React from 'react';
import { Formik, Form } from 'formik';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import AuthForm from '../../components/AuthForm/AuthForm';
import FormInput from '../../components/FormInput/FormInput';
import AuthBtn from '../../components/AuthBtn/AuthBtn';
import { loginFormData, initialValues, validate } from './util/LoginFormData';
import axiosInstance from '../../services/AxiosInstance';
import './Login.scss';

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  const onSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      const res = await axiosInstance.post('/account/login/', values);
      auth.login(res.data.Token);
      if (location.state?.from) navigate(location.state.from);
      else navigate('/dashboard');
    } catch (error) {
      console.log(error);
      let message = 'Invalid email or password';
      if (!!error.response && !!error.response.data && !!error.response.data.status) {
        message = error.response.data.status;
        if (message === 'User not verified') {
          message = 'Please verify your email first by clicking on the confirmation link sent to your email address during signup.';
        }
      }
      setFieldError('authentication', message);
    }
    setSubmitting(false);
  };

  return (
    // eslint-disable-next-line
    <AuthForm
      title="Welcome"
      subtitle="Sign in to continue."
      to="/signup"
      text="Don't have an account?"
      link="Sign up">
      <Formik {...{ validate, initialValues, onSubmit }}>
        {({ isSubmitting, errors }) => (
          <Form className="login">
            {loginFormData.map(({ label, name, type }, index) => (
              <FormInput {...{ name, label, type }} key={index} page="login" />
            ))}
            <Link to="/forgot-password" className="login__button">
              <span className="login__button__link">Forgot Password?</span>
            </Link>
            <AuthBtn {...{ errors, isSubmitting }} btnText="Sign In" />
          </Form>
        )}
      </Formik>
    </AuthForm>
  );
}

export default Login;
